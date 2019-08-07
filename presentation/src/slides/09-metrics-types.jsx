import React from "react";
import { Slide, Text, Table, TableBody, TableHeader, TableHeaderItem, TableRow, TableItem } from "spectacle";

const notes = `

`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                Prometheus Metrics Types
            </Text>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderItem />
                        <TableHeaderItem>2011</TableHeaderItem>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableItem>None</TableItem>
                        <TableItem>61.8%</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>jQuery</TableItem>
                        <TableItem>28.3%</TableItem>
                    </TableRow>
                </TableBody>
            </Table>            
        </Slide>
    );
}
