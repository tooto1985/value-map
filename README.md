value-map
=============================
> Re-maps a number from one range to another.

[![NPM](https://nodei.co/npm/value-map.png)](https://nodei.co/npm/value-map/)

## Install

```
$ npm install value-map
```

## Documentation

```js
var x = valueMap(value, fromLow, fromHigh, toLow, toHigh)
```

Re-maps a number from one range to another. That is, a value of fromLow would get mapped to toLow, a value of fromHigh to toHigh, values in-between to values in-between, etc.

## Example

```js
var valueMap = require("value-map");

console.log(valueMap(50, 0, 256, 0, 1024));
//=> 200

console.log(valueMap(125, 400, 0, 0, 200));
//=> 137.5
```

## License

This code is licensed under the MIT License.