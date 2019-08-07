import React from "react";
import { Slide, Text, Image, BlockQuote, Quote, Cite, CodePane } from "spectacle";

const notes = `
<h2>Documentation</h2>

https://prometheus.io/docs/practices/histograms/

https://grafana.com/grafana/dashboards/456

<h2>Queries</h2>

<h3>5 minute request duration average</h3>
<pre>
  rate(http_request_duration_seconds_sum[5m])
/
  rate(http_request_duration_seconds_count[5m])
</pre>

<h3>apdex</h3>
<pre>
sum(rate(http_request_duration_seconds_bucket{le="1.024"}[5m])) by (job)
/
  sum(rate(http_request_duration_seconds_count[5m])) by (job)
</pre>
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                Live Code: Configure Prometheus and Grafana and calculate apdex
            </Text>
        </Slide>
    );
}
