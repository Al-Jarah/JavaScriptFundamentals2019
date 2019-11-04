/**
 * As a front-end engineer, I need to mock an AJAX response so that I will not be blocked by the
 * back-end team as they develop the API that I need.
 *
 * Using the Promise API, create a fake AJAX request that should take 50 milliseconds to complete.
 * The promise should resolve into this response:
 * @example
 * {
 *  "category": "books",
 *  "subCategory": "graphic novels",
 *  "data": [{
 *    "id": "0c8cb1b2",
 *    "title": "Berlin",
 *    "authors": ["Jason Lutes"],
 *    "image": "https://images-na.ssl-images-amazon.com/images/I/51DhbDeVIVL._SX388_BO1,204,203,200_.jpg"
 *  },{
 *    "id": "cb195709",
 *    "title": "Hey, Kiddo",
 *    "authors": ["Jarrett J. Krosoczka"],
 *    "image": "https://images-na.ssl-images-amazon.com/images/I/517I7YRvHBL._SX351_BO1,204,203,200_.jpg"
 *  },{
 *    "id": "77ae31c1",
 *    "title": "On a Sunbeam",
 *    "authors": ["Tillie Walden"],
 *    "image": "https://images-na.ssl-images-amazon.com/images/I/51Ukxxbo-mL._SX359_BO1,204,203,200_.jpg"
 *  }]
 * }
 *
 * @returns {Promise} which will resolve to the JSON above.
 */
const getBooksApi = () => {};

/**
 * @var {array} data an array of graphic novels
 * @example
 * [{
 *  "id": "0c8cb1b2",
 *  "title": "Berlin",
 *  "authors": ["Jason Lutes"],
 *  "image": "https://images-na.ssl-images-amazon.com/images/I/51DhbDeVIVL._SX388_BO1,204,203,200_.jpg"
 * },{
 *  "id": "cb195709",
 *  "title": "Hey, Kiddo",
 *  // ....
 * }]
 */
let data; // Do not change this line.

/**
 * Call on the "getBooksApi()" here and set the variable "data" above
 * to the array of graphic novels that is in your promise's response.
 */

module.exports = {
  getBooksApi,
  getData: () => data
};
