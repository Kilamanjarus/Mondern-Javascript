var Parser = require('expr-eval').Parser;
console.log('hello i am in the js file')

var parser = new Parser();
var expr = parser.parse('2 * x + 1');
console.log(expr.evaluate({ x: 3 }));

console.log(Parser.evaluate('6 * x', { x: 7 })) // 42


const dayjs = require('dayjs')
console.log(dayjs().format())

const moment = require('moment')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))