import React from "react";
import { Slide, Text, Image, BlockQuote, Quote, Cite, CodePane } from "spectacle";
import Prometheus from './media/prometheus-architecture.png';

require('prismjs/components/prism-csharp');

const notes = `
<pre>
mkdir livecode-1
cd ./livecode-1

dotnet new webapi
dotnet add package prometheus-net
dotnet add package prometheus-net.AspNetCore

# Add the following to Startup.cs -> Configure (line 33/34)
# using Prometheus;
# app.UseMetricServer();
# app.UseHttpMetrics();
</pre>
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                Live Code: Create A New WebAPI service and add prometheus to it.
            </Text>
        </Slide>
    );
}
