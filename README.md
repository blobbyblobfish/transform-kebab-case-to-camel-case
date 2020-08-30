# transform-kebab-case-to-camel-case

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
   
  ## examples
  
  basic-example = `{
  "first-name": "Jeff",
  "last-name": "Green",
  "city-and-state": "Boston, MA",
  "zip": "12345-1234"
  }`
  
  intermediate-example = `{
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
  }`
  
  advanced-example = `[{
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
  }]`
 
Created with CodeSandbox
