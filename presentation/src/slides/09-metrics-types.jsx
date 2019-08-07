import React from "react";
import { Slide, Text, Table, TableBody, TableHeader, TableHeaderItem, TableRow, TableItem } from "spectacle";

const notes = `
<h2>Counters</h2>
<p>For example, you can use a counter to represent the number of requests served, tasks completed, or errors.</p>
<p>Do not use a counter to expose a value that can decrease. For example, do not use a counter for the number of currently running processes; instead use a gauge.</p>

<h2>Gauges</h2>
<p>Gauges are typically used for measured values like temperatures or current memory usage, but also "counts" that can go up and down, like the number of concurrent requests.</p>

<h2>Histogram</h2>
<p>Use the histogram_quantile() function to calculate quantiles from histograms or even aggregations of histograms. A histogram is also suitable to calculate an Apdex score. </p>
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
                        <TableHeaderItem/>
                        <TableHeaderItem/>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableItem>Counter</TableItem>
                        <TableItem textSize="1.75rem">A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Gauge</TableItem>
                        <TableItem textSize="1.75rem">A gauge is a metric that represents a single numerical value that can arbitrarily go up and down.</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Histogram</TableItem>
                        <TableItem textSize="1.75rem">A histogram samples observations (usually things like request durations or response sizes) and counts them in configurable buckets. It also provides a sum of all observed values.</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Summary</TableItem>
                        <TableItem textSize="1.75rem">Similar to a histogram, a summary samples observations (usually things like request durations and response sizes). While it also provides a total count of observations and a sum of all observed values, it calculates configurable quantiles over a sliding time window.</TableItem>
                    </TableRow>
                </TableBody>
            </Table>            
        </Slide>
    );
}
