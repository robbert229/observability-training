import React from "react";
import { Slide, Text, Link, List, ListItem } from "spectacle";

const notes = `
  RESOURCES!
`;

/* eslint-disable */
export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Text bold textColor="tertiary" textSize="2rem">
        Resources
      </Text>

      <List>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/ganderzz/intro-functional-programming"
          >
            Slides & Code Examples
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://jsbin.com/femoburako/1/edit?js,console"
          >
            JS Bin Example of Map/Filter/Reduce
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://mostly-adequate.gitbooks.io/mostly-adequate-guide/"
          >
            Professor Frisby's Most Adequate Guide to Functional Programming
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/getify/functional-light-js"
          >
            Functional Light JavaScript (Book)
          </Link>
        </ListItem>
      </List>
    </Slide>
  );
}
