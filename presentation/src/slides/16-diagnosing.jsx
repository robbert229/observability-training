import React from "react";
import { Slide, Text, Appear } from "spectacle";

const notes = `
    I briefly pointed this out earlier, but while grafana, and prometheus give us a high level overview, we need to
    use some sort of tracing system to get a closer view.
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                How do we diagnose an issue once our metrics alert us?
            </Text>

            <Appear>
                <Text>Jaeger</Text>
            </Appear>
        </Slide>
    );
}
