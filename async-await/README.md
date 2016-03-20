# Async/Await

## Using Babel CLI

Install dependencies:

```bash
npm install babel -g
npm install --save-dev babel-plugin-transform-async-to-generator babel-plugin-transform-es2015-arrow-functions
```

Usage:

```bash
babel-node --plugins transform-async-to-generator,transform-es2015-arrow-functions index.js
```
