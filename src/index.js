/*
  Given that you have an already valid JSON string where the keys are
  all kebab-case, write a function called transformKebabCaseToCamelCase 
  that takes in this JSON string and returns a JSON string where all
  the keys are transformed to be camelCase.

  Turn a JSON string to an object
    JSON.parse(data: string): object

  Turn an object to a JSON string
    JSON.stringify(data: object): string

  Get the keys of an object into an array
    Object.keys(data: object): Array(string)
  
  Iterate through each key of an object.
    for (const property in object) {
      console.log(`${property}: ${object[property]}`);
    }
*/

//Advanced example is an array
const exampleJson = `{
  "first-name-and-middle-initial": "Jeff D.",
  "last-name": "Green",
  "address": {
    "city-and-state": "Boston, MA",
    "zip": "12345-1234"
  },
  "pets": [{
    "pet-name": "Bruno",
    "pet-gender": "male"
  }]
}`;

// Get the keys from the JSON that was passed in
// Look through each letter of the key
// remove the dashes
// leave first word's first letter as lower case
// change other words' first letters to uppercase
// return updated key
// Update the JSON keys using the updated strings
// Return the updated JSON

// Deprecated
// break key into words "first-name" ==> "first" "name" key.split('-');

function transformKebabCaseToCamelCase(data) {
  const object = JSON.parse(data);
  const keys = Object.keys(object);

  const modifiedKeys = keys.map((key) => {
    let modifiedKey = "";
    for (let letter = 0; letter < key.length; letter++) {
      // key[i] !== -
      if (key[letter] === "-") {
        continue;
      }

      if (key[letter - 1] === "-") {
        modifiedKey = `${modifiedKey}${key[letter].toUpperCase()}`;
      } else {
        modifiedKey = `${modifiedKey}${key[letter]}`;
      }
    }

    return modifiedKey;
  });

  let x = 0;

  for (const property in object) {
    object[modifiedKeys[x]] = object[property];

    if (!modifiedKeys.includes(property)) {
      delete object[property];
    }

    x++;
  }

  const kebabCased = JSON.stringify(object);

  return kebabCased;
}

const result = transformKebabCaseToCamelCase(exampleJson);
// console.log(result);
document.getElementById("app").innerHTML = result;
