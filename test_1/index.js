"use strict";

// const data = require('./test_data.json')

// console.log( data.map((character)=> character.example = `${character.first_name} ${character.last_name} says ${character.catchphrase}`))
// console.log(data)
/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test1() {
  let results = require('./test_data.json')
  results.map((character)=> character.example = `${character.first_name} ${character.last_name} says ${character.catchphrase}`)
  // Write your code here.  The pre-written lines above and below are just suggestions, feel free to delete
  // them and start fresh.
  
  
  return results;
};
