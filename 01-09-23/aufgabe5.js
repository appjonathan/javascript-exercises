// Funktion zur Extrahierung der Buchtitel aus dem Array von Büchern
function getBookTitles(books) {
    const titles = books.map(book => book.title);
    return titles;
  }
  
  const books = [
    {
      title: 'Harry Potter',
      author: 'jk'
    },
    {
      title: 'Peters Buch',
      author: 'Peter'
    }
  ];
 // Ausgabe
  console.log(getBookTitles(books));