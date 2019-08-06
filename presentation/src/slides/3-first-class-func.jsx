import React from "react";
import { CodePane, Slide, Text } from "spectacle";

const notes = `
  Functions can be passed around, and used just like we
  might use a string or integer.
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        First Class Functions
      </Text>

      <Text style={{ marginTop: 20, marginBottom: 30 }}>
        Functions are treated as data types (First-class citizens)
      </Text>

      <CodePane
        source={`function robot(voiceBox) {
  return voiceBox("bzzzz");
}
        
robot(console.log);
robot(alert);`}
        lang="javascript"
        style={{ fontSize: "2.3rem" }}
      />
    </Slide>
  );
}
