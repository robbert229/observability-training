package main

import (
	"net"
	"log"
	"flag"
	"fmt"
	"google.golang.org/grpc"
	"github.com/uber/jaeger-client-go/config"
    "github.com/uber/jaeger-lib/metrics/prometheus"
	"github.com/grpc-ecosystem/grpc-opentracing/go/otgrpc"
	"johnrowley.observability-training.accounts"
)

var (
	port = flag.Int("port", 4999, "the port to listen on")
)

func main() {
	// this indicates that we need to parse all of the flags that have been declared.
	flag.Parse()
	

	// here we open up a tcp socket and listen.
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
			log.Fatalf("failed to listen: %v", err)
	}

	log.Printf("listening on %d\n", *port)
	
	// here we configure the opentracing tracer to be backed by jaeger.
	metricsFactory := prometheus.New()
    tracer, closer, err := config.Configuration{
        ServiceName: "accounts",
    }.NewTracer(
        config.Metrics(metricsFactory),
    )
	defer closer.Close()

	// here we configure the grpc server to use our tracing middleware.
	grpcServer := grpc.NewServer(
		grpc.UnaryInterceptor(
			otgrpc.OpenTracingServerInterceptor(tracer),
		),
	)

	// here we attach our AccountsServer to the grpcServer.
	accounts.RegisterAccountsServer(grpcServer, &accounts.Server{})

	// here we block and serve all requests.
	err = grpcServer.Serve(lis)
	if err != nil {
		log.Fatalf("failed to serve")
	}
}
