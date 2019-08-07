import React from "react";
import { Appear, Image, Slide, Text, List, ListItem, Quote, BlockQuote, Cite } from "spectacle";
import InstrumentationImage from './media/steam-turbine.jpg';

const notes = `
Systems are made observable through instrumentation. Instrumentation is the act of adding instruments to a system that 
expose the information for external consumption.

In the picture is a steam turbine. You can see a number of dials that could be telling us the temperature of the steam,
what the pressure of the steam is, how much water there is, etc. We make our software systems observable through the 
use of software instruments.
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                How do we make a system Observable?
            </Text>

            <Appear>
                <Image src={InstrumentationImage} style={{height: "70vh"}}/>
            </Appear>
        </Slide>
    );
}
