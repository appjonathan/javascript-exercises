// Erstelle ein leeres Objekt namens 'person'
let person = {};

// Füge die Eigenschaften 'name' und 'alter' zum Objekt hinzu
person.name = "Max Mustermann";
person.alter = 30;

// Füge eine Methode namens 'geburtstagsFeiern' zum Objekt hinzu
person.geburtstagsFeiern = function() {
  this.alter++; // Erhöhe das Alter um 1
};

// Rufe die Methode 'geburtstagsFeiern' auf
person.geburtstagsFeiern();

// Der Wert der 'alter'-Eigenschaft wurde um 1 erhöht
console.log(person.alter); // Ausgabe: alter