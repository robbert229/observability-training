import React from "react";
import { Slide, Text, Table, TableBody, TableHeader, TableHeaderItem, TableRow, TableItem, Quote, Cite, BlockQuote } from "spectacle";

const notes = `
The USE method is like a checklist that can be used to decide what kinds of instrumentation should be done. It is used
to monitor any resources that your service may consume, or rely on.
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                The USE Method (Brendan Gregg)
            </Text>

            <BlockQuote>
                <Quote textColor="quaternary" textSize="2rem">For every resource, check utilization, saturation, and errors.</Quote>
                <Cite>Brendan D. Gregg</Cite>
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
                        <TableItem>Resource</TableItem>
                        <TableItem textSize="1.75rem">all physical server functional components (CPUs, disks, busses, ...)</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Utilization</TableItem>
                        <TableItem textSize="1.75rem">the average time that the resource was busy servicing work</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Saturation</TableItem>
                        <TableItem textSize="1.75rem">the degree to which the resource has extra work which it can't service, often queued</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Errors</TableItem>
                        <TableItem textSize="1.75rem">the count of error events</TableItem>
                    </TableRow>
                </TableBody>
            </Table>            
        </Slide>
    );
}
