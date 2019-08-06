import React from "react";
import { List, ListItem, Slide, Text, Appear } from "spectacle";

const notes = `
  Code that can easily change is super valuable. This can be extremely difficult
  with mutations and inheritence.
  <br /><br />
  - Predictable: Due to immutability contraints and pure functions, the 
  state of an application has clear-cut, visible ways it changes. Mutability loses this. The compiler
  can give a much stronger contract on functions. If our functions aren't pure, the type-system doesn't save us 100%.
  <br /><br />
  - Repeatable: If a bug occurs, we can trace down the exact state changes
  that took place--because of what was mentioned above. There is a movement for time-traveling debugging which
  a programmer can seek and rewind actions to debug bugs. This is only possible through functional programming.
  <br /><br />
  - Easier to Test: No need for heavy mocking. Functions are pure, so they are easier
  to unit test. Integration testing is just then just composing functions.
  <br /><br />
  - Concurency: Through immutability, we no longer have to worry about
  conflicts--making async tasks a lot easier.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Benefits of Being Functional
      </Text>

      <List>
        <Appear>
          <ListItem margin="15px 0 0 0">Predictable</ListItem>
        </Appear>

        <Appear>
          <ListItem margin="15px 0 0 0">Easy to Test</ListItem>
        </Appear>

        <Appear>
          <ListItem margin="15px 0 0 0">Reduced Concurrency Challenges</ListItem>
        </Appear>
      </List>
    </Slide>
  );
}
