import React from "react";
import { Appear, Image, Slide, Text, List, ListItem, Quote, BlockQuote, Cite } from "spectacle";
import ObservabilityImage from './media/observability.png';

const notes = `

`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                What is Observability?
            </Text>

            <Appear>
                <BlockQuote>
                    <Quote textColor="secondary">
                            In control theory, observability is a measure of how well internal states of a system can be inferred by knowledge of its external outputs. The observability and controllability of a system are mathematical duals.
                    </Quote>
                    <Cite>
                        Wikipedia
                    </Cite>
                </BlockQuote>
            </Appear>
        </Slide>
    );
}
