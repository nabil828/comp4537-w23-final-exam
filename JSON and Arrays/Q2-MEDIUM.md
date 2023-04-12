 For the following JSON object, which of the following JavaScript code snippets would filter and retrieve all animals that are older than 5 years.
 ```json
 {
  "name": "Zoo",
  "location": "San Francisco",
  "opening_hours": {
    "weekday": "9:00 AM - 5:00 PM",
    "weekend": "10:00 AM - 6:00 PM"
  },
  "animals": [
    {
      "name": "Lion",
      "species": "Panthera leo",
      "age": 5,
      "habitat": "African savannah",
      "diet": ["meat", "wild game"]
    },
    {
      "name": "Penguin",
      "species": "Aptenodytes forsteri",
      "age": 2,
      "habitat": "Antarctica",
      "diet": ["fish", "krill"]
    },
    {
      "name": "Elephant",
      "species": "Loxodonta africana",
      "age": 10,
      "habitat": "African grasslands",
      "diet": ["grass", "leaves", "fruits"]
    }
  ],
  "popular_exhibits": ["Big Cats", "Penguin Point", "African Savanna"],
  "ticket_price": {
    "weekday_adult": "$15",
    "weekday_child": "$10",
    "weekend_adult": "$18",
    "weekend_child": "$12"
  }
}

```


A.  
```js
const zoo = {...}; // JSON object representing the zoo
const olderAnimals = zoo.animals.filter(animal => animal.age >= 5);
```


B. 
```js
const zoo = {...}; // JSON object representing the zoo
const olderAnimals = zoo.animals.filter(animal => animal.age >= "5");
```


C. 
```js
const zoo = {...}; // JSON object representing the zoo
const olderAnimals = [];
for (let i = 0; i < zoo.animals.length; i++) {
  if (zoo.animals[i].age > 5) {
    olderAnimals.push(zoo.animals[i]);
  }
}
```

D. 
```js
const zoo = {...}; // JSON object representing the zoo
const olderAnimals = [];
for (let i = 0; i < zoo.animals.length; i++) {
  if (zoo.animals[i].age >= 5) {
    olderAnimals.push(zoo.animals[i]);
  }
}
```

Answer: C