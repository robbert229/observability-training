import React from "react";
import { Slide, Text, Table, TableBody, TableHeader, TableHeaderItem, TableRow, TableItem, Quote, Cite, BlockQuote } from "spectacle";

const notes = `
The RED method is used to get general metrics for a given service. Each service can, and should have RED metrics exposed.
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                The RED Method (Tom Wilkie)
            </Text>

            <BlockQuote>
                <Quote textColor="quaternary" textSize="2rem">The USE Method doesn't really apply to services; it applies to hardware, network disks, things like this. We really wanted a microservices-oriented monitoring philosophy, so we came up with the RED Method.</Quote>
                <Cite>Tom Wilkie</Cite>
            </BlockQuote>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderItem/>
                        <TableHeaderItem/>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableItem>Rate</TableItem>
                        <TableItem textSize="1.75rem">The number of requests per second.</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Errors</TableItem>
                        <TableItem textSize="1.75rem">The number of requests that have failed.</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Duration</TableItem>
                        <TableItem textSize="1.75rem">The amount of time that the requests take.</TableItem>
                    </TableRow>
                </TableBody>
            </Table>            
        </Slide>
    );
}
