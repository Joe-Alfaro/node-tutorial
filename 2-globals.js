// GLOBALS - NO WINDOW!!!!

// __dirname - path to current directory
// __filename - filename
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);

let intervalID = null;
let counter = 0;
function count() {
  const total = 10;
  console.log(`${total - counter}`);
  counter++;
  if (counter === total) {
    clearInterval(intervalID);
  }
}
intervalID = setInterval(count, 1000);
