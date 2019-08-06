import React from "react";
import { Slide, Text, BlockQuote } from "spectacle";

const notes = `
  John Carmack, creator of DOOM & Quake and now works at Oculus, has
  this quote on functional programming in C++. 
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <BlockQuote
        bold
        textColor="dark"
        textSize="1.7rem"
        style={{ lineHeight: "2.4rem" }}
      >
        "No matter what language you work in, programming in a functional style
        provides benefits. You should do it whenever it is convenient, and you
        should think hard about the decision when it isn't convenient."
      </BlockQuote>

      <Text textColor="tertiary" textSize="1.3rem">
        - John Carmack
      </Text>

      <Text textColor="secondary" textSize="0.7rem" style={{ marginTop: 15 }}>
        <a href="http://www.gamasutra.com/view/news/169296/Indepth_Functional_programming_in_C.php">
          http://www.gamasutra.com/view/news/169296/Indepth_Functional_programming_in_C.php
        </a>
      </Text>
    </Slide>
  );
}
