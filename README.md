# LeetCode API Package

## Introduction

Welcome to the LeetCode API npm package! This package provides a convenient way to interact with the LeetCode platform and access various features related to LeetCode submissions and user data.

## Features

Currently, the package supports the following features:

#### 1) Get User's Latest Submission

You can use this package to retrieve a user's latest submission on LeetCode. The submission details may include information about the problem, submission timestamp, and other relevant data.

## Installation

You can install this package via npm:

```bash
npm i leetapi
```
## Usage

```javascript
const api = require('leetapi');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    api.getSubmissions('theyashwanthsai')
  .then(data => {
    console.log(data);
    res.json(data);
  })
  .catch(error => {
    console.error(error);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```





### Cheklist:
- [x] User past submissions
- [ ] User profile related
- [ ] Error Handling
- [ ] tests
