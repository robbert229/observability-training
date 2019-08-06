import React from "react";
import { CodePane, Slide, Text } from "spectacle";

const notes = `
  Like using 'const' for everything.
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Immutable
      </Text>

      <Text style={{ marginTop: 10, marginBottom: 20 }}>
        Once a value is set, it never changes
      </Text>

      <CodePane
        source={`const obj = {
  a: 1,
  b: 2
};

function addOne(input) {
  return {
    a: input.a + 1,
    b: input.b + 1
  };
}

const newObj = addOne(obj);

newObj === obj // false`}
        lang="javascript"
        style={{ fontSize: "1.7rem" }}
      />
    </Slide>
  );
}
