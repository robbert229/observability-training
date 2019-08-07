import React from "react";
import { Slide, Text, CodePane } from "spectacle";

const notes = `
Briefly go over configuring prometheus on kubernetes.
`;

const source = `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: example-app
  template:
    metadata:
      labels:
        app: example-app
    spec:
      containers:
      - name: example-app
        image: fabxc/instrumented_app
        ports:
        - name: web
          containerPort: 8080
---
kind: Service
apiVersion: v1
metadata:
  name: example-app
  labels:
    app: example-app
spec:
  selector:
    app: example-app
  ports:
  - name: web
    port: 8080
---
#
# A ServiceMonitor allows the Prometheus operator to know which services 
# expose metrics on /metrics, and on which endpoints. Here we indicate that
# the example-app service monitor shall resolve to any service that has the
# 'app: example-app' labels, and that the /metrics endpoint can be found on the
# endpoint web (which is port 8080)
#
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: example-app
  labels:
    team: frontend
spec:
  selector:
    matchLabels:
      app: example-app
  endpoints:
  - port: web
---
#
# Here we declare an instance of a Prometheus. Kubernetes looks at this 
# resource and will create a stateful set for each Prometheus resource 
# instance. The prometheus will scrape all of the services that can be
# found using the service monitors.
#
apiVersion: monitoring.coreos.com/v1
kind: Prometheus
metadata:
  name: prometheus
spec:
  serviceAccountName: prometheus
  serviceMonitorSelector:
    matchLabels:
      team: frontend
  resources:
    requests:
      memory: 400Mi
  enableAdminAPI: false
`;

export default function () {
    return (
        <Slide textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
                Configuring Prometheus On Kubernetes With The Prometheus Operator
            </Text>

            <div>
                <CodePane source={source} theme="light" overflow="scroll" height="70vh"/>
            </div>
            
        </Slide>
    );
}
