const zoo = {
  "name": "My Zoo",
  "location": "City X",
  "animals": [
    {
      "name": "Lion",
      "species": "Panthera leo",
      "age": 5
    },
    {
      "name": "Tiger",
      "species": "Panthera tigris",
      "age": 3
    },
    {
      "name": "Bear",
      "species": "Ursus arctos",
      "age": 7
    }
  ]
};

const decrementedAges = zoo.animals.map(animal => {
  animal.age--;
});
console.log(decrementedAges);