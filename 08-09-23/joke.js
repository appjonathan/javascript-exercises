const jokeButton = document.getElementById("jokeButton");
const jokeText = document.getElementById("jokeText");

const jokes = [
  "Warum hat der Frosch keinen Job? Weil er ein Faulfrosch ist!",
  "Was macht ein Clown im Büro? Faxen!",
  "Warum haben Vögel kein Geld? Weil sie sich immer zwitschern!"
];

jokeButton.addEventListener("click", showRandomJoke);

function showRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeText.textContent = jokes[randomIndex];
}