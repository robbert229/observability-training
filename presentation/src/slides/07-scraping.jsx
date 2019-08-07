import React from "react";
import { Slide, Text, Image, BlockQuote, Quote, Cite, CodePane } from "spectacle";
import Prometheus from './media/prometheus-architecture.png';

require('prismjs/components/prism-csharp');

const notes = `
Prometheus gathers metrics by scraping different services at a given interval. 
<br />
<br />

There are two options when adding metrics to a given application or service. The first option is to make the 
application itself directly export the metrics. To expose the metrics so that prometheus can scrape them we need to
have http server, and expose all the metrics we are gathering on /metrics. We can then point prometheus to this 
endpoint and let it gather the metrics.

If you can't expose any metrics from the service itself you need to build whats known as an "exporter". Exporters
gather metrics from some other systems, but expose the metrics via a http server hosted from the exporter. One common
exporter is the "node_exporter" which gathers linux, windows, freebsd, etc metrics and host them on a webserver in the format
that prometheus consumes.
`;

const source = `
# HELP dotnet_total_memory_bytes Total known allocated memory
# TYPE dotnet_total_memory_bytes gauge
dotnet_total_memory_bytes 6151552
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 2223117160448
# HELP process_private_memory_bytes Process private memory size
# TYPE process_private_memory_bytes gauge
process_private_memory_bytes 78647296
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 1.03125
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1565154434.77352
# HELP process_open_handles Number of open handles
# TYPE process_open_handles gauge
process_open_handles 802
# HELP process_num_threads Total number of threads
# TYPE process_num_threads gauge
process_num_threads 30
# HELP dotnet_collection_count_total GC collection count
# TYPE dotnet_collection_count_total counter
dotnet_collection_count_total{generation="0"} 0
dotnet_collection_count_total{generation="1"} 0
dotnet_collection_count_total{generation="2"} 0
# HELP process_working_set_bytes Process working set
# TYPE process_working_set_bytes gauge
process_working_set_bytes 66547712
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                Prometheus /metrics
            </Text>

            <CodePane source={source} theme="light" />
        </Slide>
    );
}
