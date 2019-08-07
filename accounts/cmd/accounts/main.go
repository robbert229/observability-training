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
	flag.Parse()
	
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
			log.Fatalf("failed to listen: %v", err)
	}

	log.Printf("listening on %d\n", *port)
	
	
	metricsFactory := prometheus.New()
    tracer, closer, err := config.Configuration{
        ServiceName: "accounts",
    }.NewTracer(
        config.Metrics(metricsFactory),
    )
	defer closer.Close()

	grpcServer := grpc.NewServer(
		grpc.UnaryInterceptor(
			otgrpc.OpenTracingServerInterceptor(tracer),
		),
	)

	accounts.RegisterAccountsServer(grpcServer, &accounts.Server{})

	err = grpcServer.Serve(lis)
	if err != nil {
		log.Fatalf("failed to serve")
	}
}
