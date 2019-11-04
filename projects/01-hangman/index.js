const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");

const myVariable = prompt.question("Say something: ");
console.log("Game over");
console.log(myVariable);
