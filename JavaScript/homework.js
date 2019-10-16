/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Checks to see if a string is a palindrome.
 * Use the split and join methods to solve this problem
 * @param  {[string]}  string
 * @return {Boolean}
 *
 */

function isPalindrome(str) {
  let splitString = str.split("", true);
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("", true);
  return joinArray;
}

/***
 * Use sets to remove duplicate elements from an array
 * @return {array}
 */

function removeDuplicates(numbers) {
  numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

  let newNumbers = new Set(numbers);

  let backToArray = [...newNumbers];

  return backToArray;
}
console.log(removeDuplicates());
/**
 * Return the value for hat inside clothes (which should be ball cap)
 * @return {string} type of hat
 */
function accessObject() {
  // Do not change clothes here
  let clothes = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  // Only change code below this line

  return clothes.hat;
}
console.log(accessObject());
/**
 *   Update the object to contain your first and last name.
 *   Add at least three skills inside the array
 *   @return {object} student
 */

function createStudentObject() {
  // Do not change student here
  let student = {
    firstName: "",
    lastName: "",
    skills: []
  };
  // Add code here
  student = `${"Elijah Brown"}`;
  return student;
}
console.log(createStudentObject());
/**
 * Make an object "myDog" that represents a dog. It should contain the properties
 * "name", "legs", "tails" and "owners". Each should have a value.
 * "Owners" should be an array with a list of owner names.
 * @return {object}
 */

function createDogObject() {
  let myDog = {
    name: "",
    legs: "",
    tails: "",
    owners: []
  };
  return myDog;
}

/**
 *  Using Object.keys, return all the properties contained in the object.
 *  The properties are name, legs, tails and friends.
 *
 *  @return {array}
 */
const outerValue = "Ninja";

let later;

const outerFunc = () => {
  const innerValue = "Samurai";

  const innerFunc = () => {
    if (outerValue) console.log(outerValue); // Ninja
    if (innerValue) console.log(innerValue); // Samurai
  };

  later = innerFunc;
};

outerFunc();

later();
