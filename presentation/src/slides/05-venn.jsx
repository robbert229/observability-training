import React from "react";
import { Appear, Image, Slide, Text, List, ListItem, Quote, BlockQuote, Cite } from "spectacle";
import Venn from './media/observability.png';

const notes = `
    We can instrument our codebase by using logging, metrics, and tracing. 
    <br />
    <br />

    I am going to assume that we all know what logging is and how to do it.
    <br />
    <br />

    Metrics are small bits of information that we can observe that tell us something meaningful. Common metrics are 
    api request latency, failure rates, queue lengths, etc. Metrics provide insight into overall system health.
    <br />
    <br />

    Tracing provides information about single requests. Tracing provides in depth information about what happened
    in a single request, and is helpful for finding out where things went wrong.
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                Ways We Instrument Software
            </Text>

            <Image src={Venn} style={{ height: "50vh" }} />
            <List>
                <Appear>
                    <ListItem>Logging: many different solutions</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Metrics: Grafana & Prometheus</ListItem>
                </Appear>

                <Appear>
                    <ListItem>Tracing: Jaeger</ListItem>
                </Appear>
            </List>
        </Slide>
    );
}
