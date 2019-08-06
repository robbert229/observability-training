import React from "react";
import { Slide, Text } from "spectacle";

const notes = `
  Show reduce, map, and filter
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Map/Filter/Reduce Example
      </Text>

      <a
        class="jsbin-embed"
        target="_blank"
        href="https://jsbin.com/pehifoxudi/edit?js,console"
      >
        CLICK HERE
      </a>
    </Slide>
  );
}
