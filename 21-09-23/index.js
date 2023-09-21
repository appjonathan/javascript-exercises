import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import https from 'https';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const booksFilePath = __dirname + '/books.json';
let books = [];

// Load books from file
if (fs.existsSync(booksFilePath)) {
  const data = fs.readFileSync(booksFilePath, 'utf8');
  books = JSON.parse(data);
}

app.get('/', (req, res) => {
  res.send('<h1>Meine Bibliothek</h1><ul>' +
    books.map(book => `<li>${book.title} - ${book.author} <button onclick="window.location.href='/read${book.source}'">lesen</button></li>`).join('') +
    '</ul>' +
    '<button onclick="window.location.href=\'/add\'">Buch hinzufügen</button>');
});

app.get('/read/:file', (req, res) => {
  const file = req.params.file;
  res.sendFile(file, { root: __dirname });
});

app.get('/add', (req, res) => {
  res.send(`
    <h1>Buch hinzufügen</h1>
    <form action="/addBook" method="post">
      <label for="title">Titel:</label>
      <input type="text" id="title" name="title" required><br><br>
      <label for="author">Autor:</label>
      <input type="text" id="author" name="author" required><br><br>
      <label for="url">URL:</label>
      <input type="text" id="url" name="url" required><br><br>
      <input type="submit" value="Buch hinzufügen">
    </form>
  `);
});

app.post('/addBook', (req, res) => {
  const { title, author, url } = req.body;

  // Download the book text file
  const fileName = url.substring(url.lastIndexOf('/') + 1);
  const filePath = __dirname + '/' + fileName;
  const file = fs.createWriteStream(filePath);
  const request = https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();

      // Add the book to the array
      const newBook = {
        id: books.length + 1,
        title,
        author,
        source: '/' + fileName
      };
      books.push(newBook);

      // Save the updated books array to file
      fs.writeFileSync(booksFilePath, JSON.stringify(books));

      res.redirect('/');
    });
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
