// Erstelle ein Objekt namens buch mit den Eigenschaften titel, autor und jahr.
// Setze die Werte für diese Eigenschaften auf "Die Verwandlung", "Franz Kafka" und 1915.
let buch = {
    titel: "Die Verwandlung",
    autor: "Franz Kafka",
    jahr: 1915
  };
  
  // Ändere den Wert der jahr-Eigenschaft auf 1912.
  buch.jahr = 1912;

  // Lösche die Eigenschaft autor aus dem Objekt.
  delete buch.autor;
  
  console.log(buch); // Ausgabe: Buch & Werte