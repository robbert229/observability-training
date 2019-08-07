import React from "react";
import { Slide, Text, Image, BlockQuote, Quote, Cite } from "spectacle";
import Jaeger from './media/jaeger-architecture.png';

const notes = `
Jaeger, inspired by Dapper and OpenZipkin, is a distributed tracing system released as open source by Uber 
Technologies. It is used for monitoring and troubleshooting microservices-based distributed systems, 
including:

* Distributed context propagation
* Distributed transaction monitoring
* Root cause analysis
* Service dependency analysis
* Performance / latency optimization

It has since joined the CNCF.
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                What is Jaeger?
            </Text>

            <Image src={Jaeger} style={{ height: "50vh" }}/>

            <Text textSize="2rem" textColor="quaternary"></Text>
        </Slide>
    );
}
