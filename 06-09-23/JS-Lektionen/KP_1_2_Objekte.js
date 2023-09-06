#!/usr/bin/env node
/* 

Der wichtigste Datentyp in JavaScript ist das Objekt.

Ein Objekt ist eine Sammlung von Name/Wert-Paaren
(bzw. eine Map, in der Zeichenketten auf Werte abgebildet werden).
*/

let book = {               // Objekte sind von geschweiften Klammern umschlossen.
    topic: "JavaScript",   // Die Eigenschaft "topic" hat den Wert "JavaScript".
    edition: 7             // Die Eigenschaft "edition" hat den Wert 7.
    };                     // Die geschweifte Klammer markiert das Ende des Objekts.
 

// Zugriff auf die Eigenschaften eines Objekts mit . oder []:
book.topic                 // => "JavaScript"
book["edition"]            // => 7: Eine weitere Möglichkeit, auf

// Eigenschaftswerte zuzugreifen.
book.author = "Flanagan";  // Neue Eigenschaften durch Zuweisung erstellen.
book.contents = {};        // {} ist ein leeres Objekt ohne Eigenschaften.

// Bedingter Zugriff auf Eigenschaften mit ?. (ES2020):
book.contents?.ch01?.sect1 // => undefined: book.contents hat keine
// Eigenschaft ch01.

/*
AUFGABEN BEREICH
###############################################

Erzeuge ein eigens Objekt wie im Beispiel

###############################################
*/

