import React from "react";
import { Slide, Text, Image, BlockQuote, Quote, Cite } from "spectacle";
import Prometheus from './media/prometheus-architecture.png';

const notes = `
Prometheus is a the defacto tool when it comes to monitoring and alerting in the cloudnative ecosystem. Prometheus was originally developed at soundcloud but eventually opensourced, and was actually the second project adopted by the Cloud Native Computing Foundation (CNCF). The first project adopted by the CNCF was kubernetes.
<br />
<br />

Prometheus doesn't try to visualize the data for you. It just stores it, and makes it queryable through the use of PromQL. It defers the visualization of your time series data to Grafana.
<br />
<br />
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                What is Prometheus?
            </Text>

            <Image src={Prometheus} style={{ height: "50vh" }}/>

            <Text textSize="2rem" textColor="quaternary">Prometheus is a flexible opensource toolkit for monitoring and alerting.</Text>
        </Slide>
    );
}
