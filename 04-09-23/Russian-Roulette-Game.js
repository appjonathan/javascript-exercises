// Russian Roulette Game 😱:

// firePosition ist die Position, in der die Waffe abgefeuert wird.

let firePosition = 1;

// Die Ausgabe von spinChamber ist eine "randome" Zahl und kann als Parameter an die Funktion fireGun übergeben werden.

const spinChamber = () => {
// ein inverval zwischen 1 - 8
return Math.floor(Math.random() * 8) + 1
};

// fireGun prüft ob die Zahl aus spinChamber mit der Zahl aus firePosition übereinstimmt, falls JA return "Du bist 🔫" falls NEIN return "Spiel weiter 🎲".

const fireGun = (bulletPosition) => {
// here is your code
if (bulletPosition === firePosition) {
return "Du bist pifpaf 🔫"
} else {
return "Spiel weiter"
}
};

const bulletPosition = spinChamber()
const result = fireGun(bulletPosition)

console.log(
//fireGun(spinChamber())
result,
);