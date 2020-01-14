## Introduction to Observability

[![Netlify Status](https://api.netlify.com/api/v1/badges/7667a4e6-efa5-4c04-8dba-ca4f69e58fdf/deploy-status)](https://app.netlify.com/sites/johnrowley-observability-training/deploys)

**Title:** Introduction to Observability

**Summary:** Observability is more important then ever. As software becomes more and more complicated, and we move into more complex complex environments (hybrid cloud), it becomes more difficult to understand how healty your systems are. 

This talk will go cover how to use Grafana, Prometheus, and Jaeger to gain insight into systems. 

### How To Use

**Run Environment**

`docker-compose up -d`

**Run API**

`cd ./api; dotnet run`

**Run Accounts Service**

`cd ./accounts; go run ./cmd/accounts/`

**Run Presentation**

`cd ./presentation; yarn start`
