const express = require('express');
const app = express();
const port = 3000; // Port fetslegen

// Express.js-Routen definiert

app.get('/', (req, res) => {
  res.send(`
    <h1>Hallo World!</h1>
    <a href="/greet">Greet</a>
    <br>
    <a href="/todo">Todo</a>
    <br>
    <a href="/cat/:says.">Cat</a>
  `);
});

app.get('/greet', (req, res) => {
  res.send('<h1>Herzlich Willkommen bei Jonathans Hausaufgaben!</h1>');
});

app.get('/todo', (req, res) => {
  res.sendFile('Test-Git/13-09-23/todo.html', { root: './' });
});

app.get('/cat/:says', (req, res) => {
  const { says } = req.params;
  res.redirect(`https://cataas.com/cat/says/${says}`);
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});