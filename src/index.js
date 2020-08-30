function transformKebabCaseToCamelCase(data) {
  const transformedObject = {};
  const object = JSON.parse(data);

  for (const property in object) {
    transformedObject[toCamel(property)] = convertNestedValues(
      object[property]
    );
    delete object[property];
  }

  return JSON.stringify(transformedObject);
}

function convertNestedValues(value) {
  if (typeof value === "object") {
    const convertedObj = {};
    for (const property in value) {
      convertedObj[toCamel(property)] = convertNestedValues(value[property]);
    }
    return convertedObj;
  } else return value;
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
    "zip": "12345-1234",
    "absurdities": {
      "level-of-nesting": 3
    }
  },
  "pets": {
    "pet-name": "Bruno",
    "pet-gender": "male"
  }
}`;

const result = transformKebabCaseToCamelCase(exampleJson);
document.getElementById("app").innerHTML = result;
