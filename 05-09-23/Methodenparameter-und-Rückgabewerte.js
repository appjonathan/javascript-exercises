// Schreibe eine Funktion namens multipliziere, die zwei Zahlen als Parameter erhält und das Produkt dieser Zahlen zurückgibt.
// Verwende die Funktion, um 5 und 3 zu multiplizieren und das Ergebnis auszugeben.
function multipliziere(zahl1, zahl2) {
    // Multipliziere die beiden Zahlen und speichere das Ergebnis in einer Variable.
    let produkt = zahl1 * zahl2;
  
    // Gib das Ergebnis auf der Konsole aus.
    console.log("Das Ergebnis von " + zahl1 + " * " + zahl2 + " = " + produkt);
  
    // Gib das Produkt zurück.
    return produkt;
  }
  
  // Rufe die Funktion multipliziere mit den Argumenten 5 und 3 auf.
  let ergebnis = multipliziere(5, 3);
  
  console.log(ergebnis); // Ausgabe: Ergebnis