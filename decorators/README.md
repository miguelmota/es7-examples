# Decorators

## Using Babel CLI

Install dependencies:

```bash
npm install babel -g
npm install --save-dev babel-plugin-transform-decorators-legacy babel-plugin-transform-es2015-parameters
```

Usage:

```bash
babel-node --plugins transform-decorators-legacy,transform-es2015-parameters index.js
```
