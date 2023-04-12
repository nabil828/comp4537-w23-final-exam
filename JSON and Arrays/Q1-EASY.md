For the following JSON object, How do you access the name of the first pet in JS?

```json
[{
  "name": "Alice",
  "age": 32,
  "gender": "female",
  "hobbies": ["reading", "hiking", "cooking"],
  "pets": [
    {
      "name": "Buddy",
      "species": "Dog",
      "age": 3
    },
    {
      "name": "Whiskers",
      "species": "Cat",
      "age": 5
    }
  ],
  "languages": ["English", "French", "Spanish"]
}
]
```


A.  
```js
const firstPetName = jsonObject.pets.name;
console.log(firstPetName); // Output: undefined
```

B.  
```js
const firstPetName = jsonObject.pets[0].name;
console.log(firstPetName); // Output: "Buddy"
```

C.
```js
const firstPetName = jsonObject.pets[1].name;
console.log(firstPetName); // Output: "Whiskers"
```

D.
```js
const firstPetName = jsonObject.pets.name[0];
console.log(firstPetName); // Output: undefined
```


Answer: B


A. Explanation: This is incorrect because jsonObject.pets is an array, and attempting to access the name property directly on an array will result in undefined. To access the name of the first pet, we need to use array indexing jsonObject.pets[0].name.

C.Explanation: This is incorrect because it retrieves the name of the second pet ("Whiskers") instead of the first pet ("Buddy"). Arrays in JavaScript are zero-indexed, so the first element is accessed with index 0, not 1.

D. Explanation: This is incorrect because it tries to access the name property on the jsonObject.pets array, and then tries to access the first element of that property, which is not valid. Instead, we should access the name property of the first element in the jsonObject.pets array using jsonObject.pets[0].name.



