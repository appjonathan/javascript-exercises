// Erstelle ein Objekt namens buch mit den Eigenschaften titel, autor und jahr.
// Setze die Werte für diese Eigenschaften auf "Die Verwandlung", "Franz Kafka" und 1915.
let buch = {
    titel: "Die Verwandlung",
    autor: "Franz Kafka",
    jahr: 1912,
    // Die Methode information gibt eine Zeichenkette zurück, die die Informationen zum Buch enthält.
    information: function() {
      return this.titel + " von " + this.autor + ", veröffentlicht im Jahr " + this.jahr;
    }
  };
  
  console.log(buch.information());// Ausgabe: Buch Info