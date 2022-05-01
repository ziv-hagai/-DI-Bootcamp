const script = require('./main.js')

const a = script.largeNumber;
const b = 5;
const result = a+b;

// console.log(a+b);

module.exports = {
    result: result
};