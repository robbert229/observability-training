import React from "react";
import { Slide, Text } from "spectacle";

const notes = `
  Comparing imperative/oop and functional quicksort
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Quick Sort
      </Text>

      <Text>Example</Text>
    </Slide>
  );
}
