// Die Funktion removeFromArray nimmt ein Array arr und einige andere Argumente args entgegen und entfernt dann die Elemente aus arr, die in args enthalten sind.
function removeFromArray(arr, ...args) {
    return arr.filter(item => !args.includes(item));
  }
// Ruft die Funktion removeFromArray auf und gibt das Ergebnis auf der Konsole aus.
  console.log(removeFromArray([1, 2, 3, 4], 3)); 