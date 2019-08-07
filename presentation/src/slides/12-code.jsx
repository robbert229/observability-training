import React from "react";
import { Slide, Text, CodePane } from "spectacle";

require('prismjs/components/prism-csharp')

const notes = `
Now we have talked about a number of 
`;

const source = `
// counters

private static readonly Counter ProcessedJobCount = Metrics
	.CreateCounter("myapp_jobs_processed_total", "Number of processed jobs.");

...

ProcessJob();
ProcessedJobCount.Inc();

// gauges

private static readonly Gauge JobsInQueue = Metrics
	.CreateGauge("myapp_jobs_queued", "Number of jobs waiting for processing in the queue.");

...

jobQueue.Enqueue(job);
JobsInQueue.Inc();

...

var job = jobQueue.Dequeue();
JobsInQueue.Dec();

// summary

private static readonly Summary RequestSizeSummary = Metrics
	.CreateSummary("myapp_request_size_bytes", "Summary of request sizes (in bytes) over last 10 minutes.");

...

RequestSizeSummary.Observe(request.Length);

// histogram

private static readonly Histogram OrderValueHistogram = Metrics
	.CreateHistogram("myapp_order_value_usd", "Histogram of received order values (in USD).",
		new HistogramConfiguration
		{
			// We divide measurements in 10 buckets of $100 each, up to $1000.
			Buckets = Histogram.LinearBuckets(start: 100, width: 100, count: 10)
		});

...

OrderValueHistogram.Observe(order.TotalValueUsd);
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                Code Examples (<a href="https://github.com/prometheus-net/prometheus-net" >github</a>)
            </Text>


            <CodePane lang="csharp" source={source}  overflow="scroll" height="70vh"/>
        </Slide>
    );
}
