// Diese JavaScript-Schleife wiederholt den Befehl console.log("Hello World") 10 Mal.
// for (let i = 0; i < 10; i++) {
//    console.log("Hello World");
//  }

// Dieser Code verwendet eine for-Schleife, um die Zahlen von 0 bis 100 zu durchlaufen und jede Zahl mit console.log() auszugeben. Die Schleife beginnt bei 0 (let i = 0), läuft so lange wie i kleiner oder gleich 100 ist (i <= 100) und erhöht i bei jedem Schleifendurchlauf um 1 (i++).
//for (let i = 0; i <= 100; i++) {
//    console.log(i);
//  }

// Dieser Code verwendet eine for-Schleife, um die Zahlen von 100 bis 0 zu durchlaufen und jede Zahl mit console.log() auszugeben. Die Schleife beginnt bei 100 (let i = 100), läuft so lange wie i größer oder gleich 0 ist (i >= 0) und verringert i bei jedem Schleifendurchlauf um 1 (i--).
//for (let i = 100; i >= 0; i--) {
//   console.log(i);
//  }

//Dieser Code verwendet eine for-Schleife, um jede zweite Zahl von 0 bis 100 zu durchlaufen und jede Zahl mit console.log() auszugeben. Die Schleife beginnt bei 0 (let i = 0), läuft so lange wie i kleiner oder gleich 100 ist (i <= 100) und erhöht i bei jedem Schleifendurchlauf um 2 (i += 2).
//for (let i = 0; i <= 100; i += 2) {
//    console.log(i);
//  }

//Dieser Code verwendet eine while-Schleife, um zu überprüfen, wie oft die Zahl 2 in die gegebene Zahl n passt. Der Code verwendet den Modulo-Operator %, um den Rest bei der Division von n durch 2 zu ermitteln. Wenn der Rest 0 ist, wird die Variable count erhöht. Anschließend wird n durch 2 geteilt, um zur nächsten Stelle zu gelangen. Dies wird so lange wiederholt, bis n kleiner als 2 ist.
//let n = 2; 
// Beispielzahl
//let count = 0;
//while (n >= 2) {
//  if (n % 2 === 0) {
//    count++;
//  }
//  n = Math.floor(n / 2);
//}
//console.log("Die Zahl 2 passt " + count + " Mal in die gegebene Zahl.");

// Do-While-Schleife #1
//let i = 0;
//do {
//  console.log("Hello World");
//  i++;
//} while (i < 10);

//While-Schleife #1
//let i = 0;
//while (i < 10) {
//  console.log("Hello World");
//  i++;
//}

//Do-While-Schleife #2
//console.log("2. Do-While-Schleife:");
//let j = 0;
//do {
//  console.log(j);
//  j++;
//} while (j <= 100);

//While-Schleife #2
//console.log("3. While-Schleife:");
//let k = 0;
//while (k <= 100) {
//  console.log(k);
//  k++;
//}

//Dieser Code verwendet eine For-Schleife, um die Zahlenfolge zu erzeugen und auf der Konsole auszugeben. Die Variable output wird initialisiert, um die aktuellen Zahlen zu speichern. In jedem Schleifendurchlauf wird die Variable output um die aktuelle Zahl erweitert und dann auf der Konsole ausgegeben.
//let output = "";
//for (let i = 1; i <= 9; i++) {
//  output += i;
//  console.log(output);
//}

// In diesem Code wird eine äußere For-Schleife verwendet, um die Anzahl der Zeilen zu steuern. Die innere For-Schleife wird verwendet, um die entsprechende Anzahl von Sternen pro Zeile zu erzeugen. Die Variable output wird initialisiert, um die aktuellen Sterne zu speichern. In jedem Schleifendurchlauf wird ein Stern zur output-Variable hinzugefügt. Nach Abschluss der inneren Schleife wird output auf der Konsole ausgegeben.
//for (let i = 1; i <= 9; i++) {
//    let output = "";
//    for (let j = 1; j <= i; j++) {
//      output += "*";
//    }
//    console.log(output);
//  }

// Diese Funktion verwendet die map()-Funktion, um ein neues Array laengen zu erstellen, das die Länge jedes Worts in der Eingabeliste enthält. Anschließend wird die reduce()-Funktion verwendet, um die Summe aller Längen im Array zu berechnen. Die Funktion gibt die Gesamtsumme der Längen zurück.
function berechneSummeDerLaengen(woerter) {
    // Verwende die map-Funktion, um die Länge jedes Worts zu berechnen
    const laengen = woerter.map((wort) => wort.length);
  
    // Verwende die reduce-Funktion, um die Summe der Längen zu berechnen
    const summe = laengen.reduce((akkumulator, laenge) => akkumulator + laenge, 0);
  
    return summe;
  }
  
  // Beispielaufruf
  const eingabe = ['Rosine', 'Traube', 'Annanas'];
  const ausgabe = berechneSummeDerLaengen(eingabe);
  console.log(ausgabe); 
  
  // Ausgabe: 19