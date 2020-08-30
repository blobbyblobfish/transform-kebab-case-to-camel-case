function transformKebabCaseToCamelCase(data) {
  const transformedObject = JSON.parse(data, reviver);
  return JSON.stringify(transformedObject);
}

function reviver(key, value) {
  const object = {};

  if (key) {
    key = toCamel(key);
    console.log(key, value);
    object[key] = value;
    return object;
  }
}

function toCamel(s) {
  let camelCased = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === "-") {
      camelCased = camelCased + s[i].toUpperCase();
    } else if (s[i] !== "-") {
      camelCased = camelCased + s[i];
    }
  }

  return camelCased;
}

const exampleJson = `{
  "first-name-and-middle-initial": "Jeff D.",
  "last-name": "Green",
  "address": {
    "city-and-state": "Boston, MA",
    "zip": "12345-1234"
  },
  "pets": {
    "pet-name": "Bruno",
    "pet-gender": "male"
  }
}`;

const result = transformKebabCaseToCamelCase(exampleJson);
document.getElementById("app").innerHTML = result;
