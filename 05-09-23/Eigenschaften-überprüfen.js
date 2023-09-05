// Schreibe eine Funktion hatEigenschaft(obj, eigenschaft), die überprüft, ob ein Objekt eine bestimmte Eigenschaft hat.
// Die Funktion soll true zurückgeben, wenn das Objekt die Eigenschaft hat, andernfalls false.
function hatEigenschaft(obj, eigenschaft) {
    return eigenschaft in obj;
  }
  
  // Beispielaufruf der Funktion
  let person = { name: "Max", alter: 30, stadt: "Berlin" };
  
  console.log(hatEigenschaft(person, "name")); // Ausgabe: Eigenschaft true or false
  console.log(hatEigenschaft(person, "geburtsdatum")); // Ausgabe: Eigenschaft true or false