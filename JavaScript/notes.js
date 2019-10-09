let log = console.log;

function getLastCharacter(str) {
  let last = str.charAt(str.length - 1);

  return last;
}

function createAnArray() {
  let array = ["JavaScript"]; // Do not change this line
  /* Add three more items to the array here */
  array.push("eli", "joe", "josh");
  return array;
}

function accessingAnArray() {
  const cars = ["BMW", "Honda", "Civic"]; // Do not change this line
  return cars[0];
}

function addFunctionsIntoArray(tom, bill) {
  const add = () => tom + bill;

  return add;
  // Create and return an array here
}

log(addFunctionsIntoArray()[0](2, 3));
