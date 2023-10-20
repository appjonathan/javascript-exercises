//Diese Funktion multipliziert die Einträge eines Arrays.
//Hierbei darf das Ergebnis nie 0 sein!
function multiplyArray(array) {
    let res = 1;
    for (let elem of array) {
        if (elem === 0) {
            return 0; // Wenn ein Element 0 ist, wird direkt 0 zurückgegeben
        }
        res *= elem;
    }
    return res; // Das Ergebnis wird zurückgegeben
}

//Diese Funktion überprüft, 
//ob die Summe von Elementen kleiner ist als das erste Element eines Arrays
//Sprich: [28, 17, 2, 5] => ist 17 + 2 + 5 kleiner als 28? 
//Das Ergebnis ist ein Boolean
function sumSmallerThanFirst(array) {
    let first = array[0];
    let sum = 0;

    for (let i = 1; i < array.length; i++) { // Starte bei Index 1, da das erste Element bereits in first gespeichert ist
        sum += array[i];
    }

    return sum < first;
}

// Diese Funktion testet eine andere Funktion, indem sie sie mit einem Argument aufruft und das erwartete Ergebnis mit dem tatsächlichen Ergebnis vergleicht.
function testFunction(name, argument, expected) {
    console.log("========================");
    console.log(`Die Funktion ${name} wurde getestet mit Argument ${JSON.stringify(argument)}.`);
    console.log("Erwartet war:");
    console.log(expected);
    
    // Die eval-Funktion wird verwendet, um den übergebenen Argumentwert in den Funktionsaufruf einzufügen.
    const result = eval(`${name}(${JSON.stringify(argument)})`);
    
    console.log("Resultat:");
    console.log(result);
    
    // Vergleiche das erwartete Ergebnis mit dem tatsächlichen Ergebnis und gib entsprechende Ausgaben aus.
    if (result === expected) {
        console.log("Test SUCCEEDED");
    } else {
        console.log("Test FAILED");
    }
}

// Teste die Funktionen mit verschiedenen Argumenten und erwarteten Ergebnissen.
function test() {
    //TODO: Hier schreibt ihr eure Tests
    //multiplyArray
    testFunction("multiplyArray", [2, 3, 4], 24);
    testFunction("multiplyArray", [2, 0, 4], 8);
    testFunction("multiplyArray", [], 1);
    testFunction("multiplyArray", [-2, 3, -4], -24);
    //sumSmallerThenFirst
    testFunction("sumSmallerThanFirst", [28, 17, 2, 5], true);
    testFunction("sumSmallerThanFirst", [1, 2, 3, 4], false);
}

test();