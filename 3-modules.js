// CommonJS, every file is module (by default)
// Modules
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
console.log(data);

sayHi("Susan");
sayHi(john);
sayHi(peter);

require("./7-mind-grenade");
