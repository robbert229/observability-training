import React from "react";
import { Slide, Text, Link, List, ListItem } from "spectacle";

const notes = `
  RESOURCES!
`;

/* eslint-disable */
export default function() {
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
      </List>
    </Slide>
  );
}
