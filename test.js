const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let list = [];
rl.on("line", (line) => {
  if (n === 0) {
    n = +line;
  } else {
    list.push(+line);
    if (list.length === n) {
      rl.close();
    }
  }
});
rl.on("close", () => {
  list.sort((a, b) => a - b);
  for (let number of list) {
    console.log(number);
  }
  process.exit();
});
