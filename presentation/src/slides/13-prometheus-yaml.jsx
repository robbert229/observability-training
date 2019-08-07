import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `
We are using docker and docker-compose to provide the environment for todays talk.

using Prometheus;
app.UseMetricServer();
app.UseHttpMetrics();
`;

const source = `
global:
  scrape_interval:     15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  
scrape_configs:
  - job_name: 'netcore-prometheus'
    # metrics_path defaults to '/metrics'
    static_configs:
    - targets: ['localhost:5000']
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                Configuring Prometheus With Yaml
            </Text>

            <div>
                <CodePane source={source} theme="light" overflow="auto" height="70vh"/>
            </div>
            
        </Slide>
    );
}
