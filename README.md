# Object tracker

A small zero-dependency library that allows to track changes to objects ✨

## Installation

```shell
# using NPM
npm install --save object-tracker
# or using Yarn
yarn add object-tracker
```

## Usage

```javascript
// using CommonJS syntax
const { track } = require('object-tracker');
// or using ES6 syntax
import { track } from 'object-tracker';

const proxy = track({ foo: 'bar', baz: ['a', 'b', 'c'] }, console.log, {
  recursive: false,
});

proxy.foo = 'qux';
/*
After that in the console:
{
  foo: 'qux',
  baz: ['a', 'b', 'c']
}
*/

proxy.baz.push('d');
/*
After that in the console:
(nothing, because recursive option is set to false)
*/
```

## Documentation

You can find the documentation [here](DOCS.md)
