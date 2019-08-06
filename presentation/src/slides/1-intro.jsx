import React from "react";
import { Heading, Slide, Text } from "spectacle";
import { Logo } from "./components/Logo";

const notes = `
  I'm a Software Engineer at SEL were I work on applications for manufacturing. This is an area 
  that really benefits from the talk I'm doing today. The systems we build are dynamic, and have to work
  even when there is no internet. In this area, functional programming helps immensely. 
  <br />
  <br />
  At SEL we design and build products that protect power grids around the world.
  <br />
  Our mission is to make Electric Power Safer, More Reliable, and More Economical®
  <br />
  <br />
  Functional programming has a myriad of benefits that we'll cover later on,
  but for this talk I mainly want to introduce a different way to think about problems.
  <br />
  Most programmers code in an imperative or OOP paradigm; Functional programming is just another
  tools to solve problems.
  <br />
  <br />
  Overview/outline...
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Heading size={4} textColor="secondary" caps lineHeight={1.2}>
        Introduction to
        <br />
        Functional Programming
      </Heading>

      <Text bold textColor="tertiary" textSize="2rem" style={{ marginTop: 20 }}>
        Dylan Paulus
      </Text>

      <Logo />
    </Slide>
  );
}
