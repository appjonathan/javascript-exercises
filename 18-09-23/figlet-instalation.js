const figlet = require('figlet');

const message = 'Hallo Welt!';

figlet.text(message, { font: 'Dancing Font' }, function(err, data) {
  if (err) {
    console.log('Fehler beim Generieren der Figlet-Nachricht:', err);
    return;
  }
  console.log(data);
});