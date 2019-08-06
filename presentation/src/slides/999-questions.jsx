import React from "react";
import { Slide, Heading } from "spectacle";

const notes = ``;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Heading bold fit textColor="dark" lineHeight={1.4}>
        Questions?
      </Heading>
    </Slide>
  );
}
