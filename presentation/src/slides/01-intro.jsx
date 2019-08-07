import React from "react";
import { Heading, Slide, Text } from "spectacle";
import { Logo } from "./components/Logo";

const notes = ` 
    Hello my name is John Rowley. I'm a Software Engineer at SEL were I work on internal applications. Today I will be 
    talking about the concept of observability in systems.
    <br />
    It used to be that you just deployed a system to a server and called it a day. Nowadays we are 
    deploying applications to the cloud, outside of our own datacenters. In these data centers we may have 
    higher latency, we may not have ssh access to the machines that are running our programs. There 
    may be outages or partial outages in services like S3, that render portions of our systems unavailable.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Heading size={4} textColor="secondary" caps lineHeight={1.2}>
        Introduction to
        <br />
        Observability      
      </Heading>
      <Text small textColor="secondary" textSize="2rem" style={{ marginTop: 10 }}>
        with Prometheus, Grafana, and Jaeger
      </Text>

      <Text bold textColor="tertiary" textSize="2rem" style={{ marginTop: 50 }}>
        John Rowley
      </Text>

      <Logo />
    </Slide>
  );
}
