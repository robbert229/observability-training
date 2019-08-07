import React from "react";
import { Slide, Text, Link, List, ListItem } from "spectacle";

const notes = `
  RESOURCES!
`;

/* eslint-disable */
export default function () {
    return (
        <Slide bgColor="primary" textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem">
                Resources
            </Text>

            <List>
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://github.com/robbert229/observability-training"
                    >
                        Slides & Code Examples
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://blog.twitter.com/engineering/en_us/a/2013/observability-at-twitter.html"
                    >
                        Observability at Twitter (part 1)
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://blog.twitter.com/engineering/en_us/a/2016/observability-at-twitter-technical-overview-part-i.html"
                    >
                        Observability at Twitter (part 2)
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html"
                    >
                        Metrics, Tracing, and Logging
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/"
                    >
                        The RED Method
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        target="_blank"
                        href="http://www.brendangregg.com/usemethod.html"
                    >
                        The USE Method
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://www.olivercoding.com/2018-07-22-prometheus-dotnetcore/"
                    >
                        Promethues With DotNetCore
                    </Link>
                </ListItem>
                
            </List>
        </Slide>
    );
}
