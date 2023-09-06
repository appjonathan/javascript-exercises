const readline = require('readline');

function startGame() {
  // Generiere eine Zufallszahl zwischen 1 und 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0; // Initialisiere die Anzahl der Versuche auf 0

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function playRound() {
    rl.question('Rate eine Zahl zwischen 1 und 100: ', (guess) => {
      attempts++; // Inkrementiere die Anzahl der Versuche

      if (isNaN(guess)) { // Überprüfe, ob die Eingabe keine Zahl ist
        console.log('Ungültige Eingabe. Bitte gib eine Zahl ein.');
        playRound(); // Starte die Runde erneut
      } else {
        if (guess < randomNumber) { // Überprüfe, ob die geratene Zahl zu niedrig ist
          console.log('Zu niedrig!');
          playRound(); // Starte die Runde erneut
        } else if (guess > randomNumber) { // Überprüfe, ob die geratene Zahl zu hoch ist
          console.log('Zu hoch!');
          playRound(); // Starte die Runde erneut
        } else { // Die geratene Zahl ist korrekt
          console.log(`Richtig geraten! Du hast ${attempts} Versuche gebraucht.`);
          rl.question('Möchtest du ein neues Spiel starten? (ja/nein): ', (answer) => {
            if (answer.toLowerCase() === 'ja') {
              playRound(); // Starte eine neue Runde
            } else {
              rl.close();
              console.log('Auf Wiedersehen!');
            }
          });
        }
      }
    });
  }

  playRound(); // Starte die erste Runde
}

startGame(); // Starte das Spiel