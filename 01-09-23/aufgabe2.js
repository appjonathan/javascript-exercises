function reverseString(input) {
// Eine leere Zeichenkette reversed wird initialisiert, um die umgekehrte Zeichenkette aufzubauen.
    let reversed = '';
// Eine for-Schleife wird verwendet, um die Eingabe von hinten nach vorne durchzugehen.
    for (let i = input.length - 1; i >= 0; i--) { 
      reversed += input[i]; 
    }
// Die umgekehrte Zeichenkette wird zurückgegeben.
    return reversed; // Die umgekehrte Zeichenkette wird zurückgegeben.
  }
  
  console.log(reverseString('hello there')); 
// Die Funktion wird mit 'hello there' als Argument aufgerufen und das Ergebnis wird auf der Konsole ausgegeben.