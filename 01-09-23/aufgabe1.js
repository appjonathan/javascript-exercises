function repeatString(string, num) {
// Eine leere Zeichenkette wird initialisiert, um die wiederholte Zeichenkette aufzubauen.
    let repeatedString = ''; 
// Eine for-Schleife wird verwendet, um den string num-mal zur repeatedString hinzuzufügen.
    for (let i = 0; i < num; i++) { 
      repeatedString += string; 
    }
// Die wiederholte Zeichenkette wird zurückgegeben.
    return repeatedString; // Die wiederholte Zeichenkette wird zurückgegeben.
  }
// Die Funktion wird mit 'hey' und 3 als Argumenten aufgerufen und das Ergebnis wird auf der Konsole ausgegeben.
  console.log(repeatString('hey', 3)); 