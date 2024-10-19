require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Ok, i am learning it is for prasing the JSON ??

// ofc, to connect to mongodb, okkk
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// api route in okkk
app.get('/', (req, res) => {
  res.send('Hello world, it\'s me Rakesh (Node.js Beginner)...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
