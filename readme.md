# Socratiq

Check it out (here)[http://socratiq.herokuapp.com]!

## Overview

This repository contains the client server for Socratiq, my group's final project for our Databases course. Built in about three weeks,
Socratiq is our first crack at React/Redux and building a CRUD app from scratch. The goal of the project was to implement a full-stack
application using modern frameworks and development paradigms. This server, hosted on Heroku, fetches and updates data through our (Python API)[http://github.com/zehauser/socratiq] hosted on Google App Engine. Our database is a SQL database running on Google Cloud SQL.
This setup made it incredibly easy to develop in parallel. Note that this project is not feature complete and a lot of code needs to be refactored.

### Challenges

(Javascript Fatigue)[https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4]: Setting up a React project, understanding Redux, and all the necessary building took a ton of time. Similarly, for the API, it took a while getting everything set up. We ended up using the following:

- Node, Express, React, Redux
- React Router
- Webpack with hot reload, production, development, and SCSS configuration
- Axios for HTTP Requests

### Lessons Learned

- No boilerplate will fully suit your needs, and it's difficult as a beginner to know the consequences of early development decisions
- Building an app from scratch is really different from adding to an existing codebase
- How to design an API to suit front end needs
- Once you get the hang of React/Redux, adding new features doesn't require much thought
