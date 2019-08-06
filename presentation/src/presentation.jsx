// Import React
import React from "react";
import * as Slides from "./slides";

// Import Spectacle Core tags
import { Deck } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    dark: "#333",
    tertiary: "#03A9FC",
    quaternary: "#444"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentWidth="1500px"
        transition={["slide"]}
        transitionDuration={500}
        theme={theme}
        controls={false}
      >
        {Object.values(Slides).map((Slide, i) => Slide())}
      </Deck>
    );
  }
}
