import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import fs from 'fs/promises'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import weatherData from "../utils/weatherData.js"

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const publicPath = path.join(__dirname, "../public")

app.use(express.static(publicPath))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())



// Definiert einen Routenhandler für GET-Anfragen an den Root-Endpunkt der App
app.get("", (req, res) => {
  // Sendet die 'index.html' Datei aus dem 'publicPath' Verzeichnis als Antwort
  res.sendFile(path.join(publicPath, 'index.html'))
});





// Definiert einen asynchronen Routenhandler für GET-Anfragen am "/weather" Endpunkt.
app.get("/weather", async (req, res) => {
  
  // Überprüft, ob eine "address" Query-Parameter in der Anfrage vorhanden ist.
  if (!req.query.address) {
    // Wenn nicht, sendet es eine Antwort, dass die Adresse erforderlich ist.
    return res.send("Address is required")
  }

  // Ruft Wetterdaten für die angegebene Adresse mithilfe der "weatherData" Funktion ab.
  weatherData(req.query.address, async (error, result) => {
    
    // Wenn bei der Abfrage der Wetterdaten ein Fehler auftritt, wird dieser zurückgegeben.
    if (error) {
      return res.send(error)
    }

    // Überprüfen, ob die zurückgegebenen Wetterdaten gültig sind
    if (result.cod !== 200) {
      return res.send("Ungültiger Städtename")
    }

    // Überprüft, ob der aktuelle Benutzer durch ein Cookie angemeldet ist.
    const currentUser = req.cookies.username
    if (currentUser) {
      // Liest die Benutzerdaten aus der 'users.json' Datei.
      const users = JSON.parse(await fs.readFile('users.json', 'utf-8'))
      
      // Findet den aktuellen Benutzer in der Benutzerliste.
      const user = users.find(u => u.username === currentUser)

      // Überprüft, ob der angefragte Ort bereits zu den Lieblingsorten des Benutzers gehört.
      if (!user.favoritePlaces.includes(req.query.address)) {
        // Wenn nicht, fügt den Ort zu den Lieblingsorten hinzu.
        user.favoritePlaces.push(req.query.address)
        
        // Speichert die aktualisierte Benutzerliste in der 'users.json' Datei.
        await fs.writeFile('users.json', JSON.stringify(users))
      }
    }
    
    // Sendet die Wetterdaten als Antwort zurück.
    res.send(result)
  });
});





// Definiert einen Routenhandler für GET-Anfragen am "/register" Endpunkt.
app.get('/register', (req, res) => {
  // Sendet die 'register.html' Datei als Antwort.
  // Die 'register.html' Datei enthält das Formular, in dem sich Benutzer registrieren können.
  res.sendFile(path.join(publicPath, 'register.html'))
});





// Definiert einen Routenhandler für POST-Anfragen am "/register" Endpunkt.
app.post('/register', async (req, res) => {
  // Extrahiert 'username' und 'password' aus dem Anfragekörper.
  const { username, password } = req.body

  // Initialisiert ein leeres Array für Benutzer.
  let users = [];

  try {
      // Versucht, die 'users.json' Datei zu lesen.
      const rawData = await fs.readFile('users.json')
      // Parst die rohen Daten zu einem JavaScript-Objekt.
      users = JSON.parse(rawData)
  } catch (err) {
      // Falls ein Fehler auftritt (z.B. wenn die Datei nicht existiert), wird der Fehler ignoriert.
  }

  // Überprüft, ob es bereits einen Benutzer mit dem gleichen Benutzernamen gibt.
  const existingUser = users.find(user => user.username === username)
  if (existingUser) {
      // Wenn es bereits einen Benutzer mit dem gleichen Benutzernamen gibt, wird eine Fehlermeldung zurückgegeben.
      return res.send('Benutzername bereits vorhanden!')
  }

  // Verschlüsselt das Passwort mithilfe von bcrypt.
  const hashedPassword = await bcrypt.hash(password, 10)

  // Erstellt ein neues Benutzerobjekt.
  const newUser = {
      username,
      password: hashedPassword,
      favoritePlaces: []  // Initialisiert ein leeres Array für Lieblingsorte.
  };

  // Fügt den neuen Benutzer zum 'users' Array hinzu.
  users.push(newUser)

  // Speichert das aktualisierte 'users' Array in der 'users.json' Datei.
  await fs.writeFile('users.json', JSON.stringify(users))

  // Leitet den Benutzer zur Login-Seite um.
  res.redirect('/login')
});





// Route-Handler für den GET-Endpunkt "/login".
app.get('/login', (req, res) => {
  // Sendet die "login.html" Datei als Antwort zurück zum Client.
  // "path.join" wird verwendet, um den absoluten Pfad zur "login.html" Datei zu generieren,
  // indem das "publicPath" (vorher festgelegt) mit dem Dateinamen "login.html" kombiniert wird.
  res.sendFile(path.join(publicPath, 'login.html'))
});




// Route-Handler für den POST-Endpunkt "/login".
app.post('/login', async (req, res) => {
  
  // Extrahieren von Benutzername und Passwort aus dem Body der Anfrage.
  const { username, password } = req.body
  let users = [];

  try {
      // Liest die Datei "users.json" und speichert sie als UTF-8 String.
      const rawData = await fs.readFile('users.json', 'utf-8')
      
      // Konvertiert den String aus "users.json" in ein JavaScript-Array.
      users = JSON.parse(rawData)
  } catch (err) {
      // Fehlerbehandlung, wenn das Lesen der Datei oder das Parsen des JSON fehlschlägt.
      // Momentan wird der Fehler stillschweigend ignoriert.
  }

  // Sucht den Benutzer mit dem gegebenen Benutzernamen in der "users"-Liste.
  const user = users.find(u => u.username === username)
  
  // Wenn der Benutzer nicht gefunden wird, sendet eine Fehlermeldung zurück.
  if (!user) {
      return res.send('Benutzername oder Passwort ist falsch.')
  }

  // Überprüft, ob das vom Benutzer eingegebene Passwort mit dem gespeicherten Passwort übereinstimmt.
  const isPasswordValid = await bcrypt.compare(password, user.password)
  
  // Wenn das Passwort nicht gültig ist, sendet eine Fehlermeldung zurück.
  if (!isPasswordValid) {
      return res.send('Benutzername oder Passwort ist falsch.')
  }

  // Wenn der Benutzer authentifiziert ist, wird ein Cookie mit dem Benutzernamen gesetzt, das 1 Stunde gültig ist.
  res.cookie('username', username, { maxAge: 60 * 60 * 1000 })  // Setzt ein Cookie für 1 Stunde.
  
  // Leitet den Benutzer zur Hauptseite (Wurzelpfad) weiter.
  res.redirect('/')
});





// Route-Handler für den GET-Endpunkt "/get-favorite-places".
app.get('/get-favorite-places', async (req, res) => {
  
  // Holt den Benutzernamen aus den Cookies der Anfrage.
  const currentUser = req.cookies.username

  // Überprüft, ob ein Benutzername im Cookie vorhanden ist. 
  // Wenn nicht, bedeutet das, dass der Benutzer nicht angemeldet ist.
  if (!currentUser) {
      // Sendet einen 401 Unauthorized-Statuscode zurück mit einer Nachricht, 
      // dass der Benutzer nicht angemeldet ist.
      return res.status(401).send({ message: "Nicht angemeldet." })
  }

  // Versucht, die Benutzerdaten aus der Datei "users.json" zu lesen und in ein JavaScript-Objekt umzuwandeln.
  const users = JSON.parse(await fs.readFile('users.json', 'utf-8'))
  
  // Sucht den Benutzer mit dem gegebenen Benutzernamen in der "users"-Liste.
  const user = users.find(u => u.username === currentUser)
  
  // Wenn der Benutzer nicht gefunden wird, sendet einen 404 Not Found-Statuscode zurück 
  // mit einer Nachricht, dass der Benutzer nicht gefunden wurde.
  if (!user) {
      return res.status(404).send({ message: "Benutzer nicht gefunden." })
  }

  // Sendet die Lieblingsorte des Benutzers als Antwort zurück.
  res.send({ favoritePlaces: user.favoritePlaces })
});





// Route-Handler für den GET-Endpunkt "/logout".
app.get('/logout', (req, res) => {
  
  // Löscht den 'username'-Cookie aus der Benutzeranfrage.
  // Dies effektiv meldet den Benutzer ab, da der Cookie dazu diente, 
  // den Benutzer während seiner Sitzung zu identifizieren.
  res.clearCookie('username')
  
  // Leitet den Benutzer zurück zur Login-Seite, 
  // da er jetzt abgemeldet ist und sich erneut anmelden muss, 
  // um auf geschützte Bereiche der Website zuzugreifen.
  res.redirect('/login')
});


// Startet den Express-Server, sodass er auf eingehende Anfragen wartet.
app.listen(port, () => {
  
  // Gibt eine Nachricht in der Konsole aus, wenn der Server erfolgreich gestartet wurde.
  // Dies dient zur Bestätigung, dass der Server läuft und auf welchem Port er lauscht.
  console.log("Server is listening on port " + port)
});

