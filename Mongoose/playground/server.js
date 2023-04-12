const mongoose = require('mongoose');
const City = require('./city-model'); // Assuming the City model is defined in a separate file

// getting-started.js

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  let result = await City.findOneAndReplace(
    { 'city': 'Toronto' },
    { 'population': 2800000 },
 
  );

  result = await City.find({
    'city': 'Toronto'
  })
  console.log(result);


}

