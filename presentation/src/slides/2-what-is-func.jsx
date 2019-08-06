import React from "react";
import { Appear, List, ListItem, Slide, Text } from "spectacle";

const notes = `
  Just like OOP, a functional style of programming has many different design patterns
  and ideas that make it up, but as an introduction, I believe there are
  three big foudations to functional programming.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        What is Functional Programming?
      </Text>

      <List>
        <Appear>
          <ListItem style={{ marginTop: 15 }}>Immutable</ListItem>
        </Appear>

        <Appear>
          <ListItem style={{ marginTop: 15 }}>Pure/Side Effect Free</ListItem>
        </Appear>

        <Appear>
          <ListItem style={{ marginTop: 15 }}>Functions as Values</ListItem>
        </Appear>
      </List>
    </Slide>
  );
}
