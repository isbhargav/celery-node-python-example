# celery-node-python-example


 A example of using Node Client and Python Server using celery task queue. This can be used as simple articheture for deploying Machine learning model written in python and serving it using nodejs backend for high performance.

# Architecture

- Application/Cleint - Nodejs
- Worker - Python
- Message Broker - Redis
- Message Backend - Redis

# Diagram

![image](https://celery-node.js.org/assets/images/task-queue-introduction.png)

# Libraries used
### Redis Server
- `Redis docker conatiner`
### Nodejs

- `celery-node`

### Python

- `celery`

# How to Run the project

1. Git Clone the project
2. Run a redis server in docker container using following command
    `docker run --rm  -d -p 6379:6379 --name redis-docker redis`
3. change directory to `python-worker`
    1. Install dependencies :`pip install celery redis`
    2. Run the worker: `celery -A tasks worker --loglevel=INFO`
4. change directory to `node-client`
    1. Install dependencies :`npm install` or `yarn add`
    2. Run the Client : `node node-client.js` 
