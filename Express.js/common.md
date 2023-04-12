```js
const express = require('express');
const app = express();

// Bird data array
const birds = [
  { id: 1, name: 'Eagle', species: 'Aquila chrysaetos', color: 'Brown' },
  { id: 2, name: 'Owl', species: 'Strigiformes', color: 'Varies' },
  { id: 3, name: 'Hummingbird', species: 'Trochilidae', color: 'Various colors' },
  // Add more bird data objects as needed
];

// Middleware to parse request body as JSON
app.use(express.json());

// GET endpoint to get all birds
app.get('/birds', (req, res) => {
  res.json(birds);
});

// GET endpoint to get bird by ID
app.get('/birds/:id', (req, res) => {
  const birdId = Number(req.params.id);
  const bird = birds.find(bird => bird.id === birdId);

  if (!bird) {
    res.status(404).json({ message: 'Bird not found' });
  } else {
    res.json(bird);
  }
});

// POST endpoint to add a new bird
app.post('/birds', (req, res) => {
  const newBird = req.body;
  birds.push(newBird);
  res.status(201).json(newBird);
});

// PUT endpoint to update a bird by ID
app.put('/birds/:id', (req, res) => {
  const birdId = Number(req.params.id);
  const updatedBird = req.body;
  const index = birds.findIndex(bird => bird.id === birdId);

  if (index === -1) {
    res.status(404).json({ message: 'Bird not found' });
  } else {
    birds[index] = { ...birds[index], ...updatedBird };
    res.json(birds[index]);
  }
});

// DELETE endpoint to remove a bird by ID
app.delete('/birds/:id', (req, res) => {
  const birdId = Number(req.params.id);
  const index = birds.findIndex(bird => bird.id === birdId);

  if (index === -1) {
    res.status(404).json({ message: 'Bird not found' });
  } else {
    const removedBird = birds.splice(index, 1);
    res.json(removedBird[0]);
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

```