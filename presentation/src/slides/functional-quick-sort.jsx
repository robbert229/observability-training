import React from "react";
import { Slide, Text } from "spectacle";

const notes = `
  Functional example of quick sort
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Quick Sort
      </Text>

      <iframe
        style={{ width: "100%", height: "90vh" }}
        src="https://codesandbox.io/embed/yvw14q33q1?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Slide>
  );
}
