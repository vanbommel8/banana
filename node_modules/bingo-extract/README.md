# bingo-extraction
## Installation

    npm install bingo-extraction

## Usage

By popular demand, `bingo-extraction`!

```js
var bingo = require('bingo-extraction');

console.log(bingo.extract()) // random number ex: 12
console.log(bingo.getExtracted()); // array that contains extracted number ex:[12, 23]
console.log(bingo.getBag()); // array that NOT contains extracted number ex:[1,2,3...]
bingo.reset() // to reset bag and extracted

```
