import express from 'express';


const app = express();

app.get('/', (req, res) => {
  res.json({message: 'your request was successfull!'});
})

module.exports = app;