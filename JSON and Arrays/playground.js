

const zoo =
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
const animalNames = zoo.animals.map(function (animal) {
  return animal.name;
});
console.log(animalNames);