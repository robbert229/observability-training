import React from "react";
import { Appear, Slide, Text, List, ListItem } from "spectacle";

const notes = `
  
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                Why should we pursue Observability?
            </Text>

            <List>
                <Appear>
                    <ListItem>know if our customers are facing issues.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>get to root cause faster</ListItem>
                </Appear>
                <Appear>
                    <ListItem>predict outages and issues</ListItem>
                </Appear>
            </List>
        </Slide>
    );
}
