const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainer = document.getElementById('question-container');
const questionTextElement = document.getElementById('question-text');
const choicesElement = document.getElementById('choices');
const resultContainer = document.getElementById('result-container');
const scoreTextElement = document.getElementById('score-text');
const messageElement = document.getElementById('message');

let currentQuestionIndex = 0;
let score = 0;

// Array mit Quizfragen und Antworten
const questions = [
  {
    question: 'Frage 1: Was ist die Hauptstadt von Deutschland?',
    choices: ['Berlin', 'München', 'Hamburg'],
    correctAnswer: 0
  },
  {
    question: 'Frage 2: Welches ist das größte Land der Welt?',
    choices: ['Russland', 'China', 'USA'],
    correctAnswer: 0
  },
  {
    question: 'Frage 3: Wer hat die Relativitätstheorie entwickelt?',
    choices: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei'],
    correctAnswer: 1
  }
];

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});
restartButton.addEventListener('click', startQuiz);

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  startButton.style.display = 'none';
  resultContainer.style.display = 'none';
  questionContainer.style.display = 'block';
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResult();
  }
}

function showQuestion(question) {
  questionTextElement.innerText = question.question;
  question.choices.forEach((choice, index) => {
      const choiceElement = document.createElement('button');
      choiceElement.innerText = choice;
      choiceElement.addEventListener('click', () => selectAnswer(index, question.correctAnswer));
      choicesElement.appendChild(choiceElement);
 });
}  

function resetState() {
  nextButton.style.display = 'none';
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }
}

function selectAnswer(choiceIndex, correctAnswerIndex) {
  if (choiceIndex === correctAnswerIndex) {
    score++;
  }
  const choices = choicesElement.children;
  for (let i = 0; i < choices.length; i++) {
    choices[i].classList.add('disabled');
    if (i === correctAnswerIndex) {
      choices[i].classList.add('correct');
    }
    if (i === choiceIndex && i !== correctAnswerIndex) {
      choices[i].classList.add('incorrect');
    }
  }
  if (currentQuestionIndex < questions.length - 1) {
    nextButton.style.display = 'block';
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  scoreTextElement.innerText = `Punktzahl: ${score}/${questions.length}`;
  if (score === questions.length) {
    messageElement.innerText = 'Gut gemacht!';
  } else {
    messageElement.innerText = 'Weiter üben!';
  }
}