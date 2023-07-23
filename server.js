const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const port = 3000; // Change the port as needed
const mongoURL = 'mongodb+srv://ampanyaporn:<password>@cluster0.urcry24.mongodb.net/';
const dbName = 'xo_game';
let db;

app.use(bodyParser.json());

MongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');
  db = client.db(dbName);
});

app.post('/saveGame', (req, res) => {
  const gameData = req.body;
  db.collection('games').insertOne(gameData, (err, result) => {
    if (err) {
      console.error('Error saving game:', err);
      res.status(500).json({ error: 'Failed to save the game' });
    } else {
      res.status(200).json({ message: 'Game saved successfully' });
    }
  });
});

app.get('/getGames', (req, res) => {
  db.collection('games').find({}).toArray((err, games) => {
    if (err) {
      console.error('Error fetching games:', err);
      res.status(500).json({ error: 'Failed to fetch games' });
    } else {
      res.status(200).json(games);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
