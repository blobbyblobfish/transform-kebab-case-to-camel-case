function transformKebabCaseToCamelCase(data) {
  const transformedObject = {};
  const parsedJson = JSON.parse(data);
  const isArray = parsedJson instanceof Array;
  const transformedArray = [];

  if (isArray) {
    parsedJson.forEach((object) => {
      const newObject = {};

      for (const property in object) {
        newObject[toCamel(property)] = convertNestedValues(object[property]);
      }

      transformedArray.push(newObject);
    });
  } else {
    for (const property in parsedJson) {
      transformedObject[toCamel(property)] = convertNestedValues(
        parsedJson[property]
      );
    }
  }

  return isArray
    ? JSON.stringify(transformedArray)
    : JSON.stringify(transformedObject);
}

function convertNestedValues(value) {
  if (value instanceof Array) {
    const convertedArray = [];
    value.forEach((object) => {
      const convertedObj = {};

      for (const property in object) {
        convertedObj[toCamel(property)] = convertNestedValues(object[property]);
      }

      convertedArray.push(convertedObj);
    });
    return convertedArray;
  } else if (value instanceof Object) {
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

const exampleJson = `[{
  "first-name-and-middle-initial": "Jeff D.",
  "last-name": "Green",
  "address": {
    "city-and-state": "Boston, MA",
    "zip": "12345-1234",
    "absurdities": [{
      "level-of-nesting": [{
        "very-deep": "JSON"
      }]
    }]
  },
  "least-favorite-movies": [
    {
    "movie-title": "Titanic",
    "movie-director": "James Cameron",
    "actors-in-the-cast": [
      {
        "actor-name": "Kate Winslet",
        "character-name": "Rose"
      },
      {
        "actor-name": "Leonardo diCaprio",
        "character-name": "Jack"
      }
    ]
  },
  {
    "movie-title": "The Matrix",
    "movie-director": "The Wachowski Brothers"
  }
]
},
{
  "first-name-and-middle-initial": "Alice Y.",
  "last-name": "Wang",
  "address": {
    "city-and-state": "Brooklyn, NY",
    "zip": "11225-0000",
    "absurdities": [{
      "level-of-nesting": [{
        "very-deep": "JSON"
      }]
    }]
  },
  "least-favorite-movies": [
    {
    "movie-title": "Pirate of the Caribbean",
    "movie-director": "Gore Verbinski",
    "actors-in-the-cast": [
      {
        "actor-name": "Johnny Depp",
        "character-name": "Captain Jack Sparrow",
        "other-roles": [
          {
            "movie-title": "Something by Tim Burton",
            "character-first-name": "Edward"
          },
          {
            "movie-title": "Willy Wonka",
            "character-first-name": "Willy"
          }
        ]
      },
      {
        "actor-name": "Keira Knightley",
        "character-name": "Elizabeth Swann"
      },
      {
        "actor-name": "Orlando Bloom",
        "character-name": "Will Turner"
      }
    ]
  },
  {
    "movie-title": "Cloud Atlas",
    "movie-director": "The Wachowski Sisters"
  }
]
}
]`;

const result = transformKebabCaseToCamelCase(exampleJson);
document.getElementById("app").innerHTML = result;
