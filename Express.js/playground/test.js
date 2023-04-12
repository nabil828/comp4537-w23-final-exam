const axios = require('axios');



// POST request to add a new bird
axios.get('http://localhost:3000/protected', {
  headers: {
    authorization: 'my-secret-token'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error', error.message);
  });