// firePosition ist die Position, in der die Waffe abgefeuert wird.
let firePosition = 1;

// Die Ausgabe von spinChamber ist eine "randome" Zahl und kann als Parameter an die Funktion fireGun übergeben werden.
const spinChamber = () => {
  return Math.floor(Math.random() * 6) + 1; // Erzeugt eine Zufallszahl zwischen 1 und 6.
};

// fireGun prüft ob die Zahl aus spinChamber mit der Zahl aus firePosition übereinstimmt, falls JA "Du bist 🔫" falls NEIN "Spiel weiter 🎲".
const fireGun = (bulletPosition) => {
  if (bulletPosition === firePosition) {
    return "Du bist 🔫";
  } else {
    return "Spiel weiter 🎲";
  }
};

console.log(fireGun(spinChamber()));