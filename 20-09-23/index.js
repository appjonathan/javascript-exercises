import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const form = `
<form method="post" action="/login">
    <label for="name">Name:</label>
    <input name="name" type="text">
    <label for="pw">Passwort:</label>
    <input name="pw" type="password">
    <button type="submit">Login</button>
</form>
`;
//const user = [
//  {name: "Lukas", passwort: "123"},
//  {name: "Bartek", passwort: "321"},
//  {name: "Abi", passwort: "Banane"}
//]
const registerForm = `
<form method="post" action="/register">
    <label for="name">Name:</label>
    <input name="name" type="text">
    <label for="pw">Passwort:</label>
    <input name="pw" type="password">
    <label for="pwRepeat">Passwort wiederholen:</label>
    <input name="pwRepeat" type="password">
    <button type="submit">Registrieren</button>
</form>
`;

function saveUsers(users) {
  const data = JSON.stringify(users);
  fs.writeFile('users.json', data, (err) => {
    if (err) {
      console.error('Fehler beim Speichern der Benutzer:', err);
    } else {
      console.log('Benutzer erfolgreich gespeichert');
    }
  });
}

app.get("/", (req, res) => {
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Fehler beim Laden der Benutzer:', err);
      res.send(form);
    } else {
      const users = JSON.parse(data);
      // Verwenden des geladenen Benutzerarrays
      res.send(form);
    }
  });
});

app.get("/register", (req, res) => {
  res.send(registerForm);
});

app.post("/register", (req, res) => {
  const { name, pw, pwRepeat } = req.body;

  // Überprüfen ob das Passwort mit dem wiederholten Passwort übereinstimmt
  if (pw !== pwRepeat) {
    res.send("Die Passwörter stimmen nicht überein");
    return;
  }

  // Überprüfen ob der Benutzer bereits existiert
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Fehler beim Laden der Benutzer:', err);
      res.send("Fehler beim Laden der Benutzer");
      return;
    }

    const users = JSON.parse(data);
    const existingUser = users.find((u) => u.name === name);

    if (existingUser) {
      res.send("Benutzer existiert bereits");
      return;
    }

    // Hinzufügen des neuen Benutzers zum Benutzerarray
    users.push({ name, passwort: pw });

    // Speichern des aktualisierten Benutzerarrays in der Datei
    saveUsers(users);

    res.send("Registrierung erfolgreich");
  });
});

app.post("/login", (req, res) => {
  const { name, pw } = req.body;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Fehler beim Laden der Benutzer:', err);
      res.send("Fehler beim Laden der Benutzer");
      return;
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u.name === name && u.passwort === pw);

    if (user) {
      res.send("Login erfolgreich");
    } else {
      res.send("Login fehlgeschlagen");
    }
  });
});

app.listen(port, () => {
  console.log("Server hört auf Port", port);
});
