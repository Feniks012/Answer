const fileContent = require("fs").readFileSync(process.argv[2], "utf-8");

console.log(fileContent);
function array2(stack, fileContent) {
  for (let i = 0; i < fileContent; i++) {
    stacks[i] = [];
  }
  return stacks;
}
const start = (numberCicles, stacks, fileContent) => {
  for (let i = 0; i < numberCicles; i++) {
    stacks[0][i] = i + 1;
  }
  let n = 4;
  let x = true;
  let fromWhere = "";
  let toWhere = "";
  let helper = "";
  while (fileContent[n]) {
    fromWhere = fileContent[n];
    toWhere = fileContent[n + 2];
    helper = stacks[fromWhere - 1].shift();
    stacks[toWhere - 1].unshift(helper);
    console.log(stacks);
    if (helper > stacks[toWhere - 1][1]) {
      x = false;
      break;
    }
    n = n + 4;
  }
  return x;
};

let numberCicles = fileContent[0];
let numberStack = fileContent[2];
let stacks = [];

stacks = array2(stacks, numberStack, numberCicles);
let x = start(numberCicles, stacks, fileContent, numberStack);
if (x) {
  console.log("You win");
} else {
  console.log("invalid move");
}
