// Referenzen zu den HTML-Elementen holen
const startBtn = document.querySelector(".start");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .cont");
const quizBox = document.querySelector(".quiz-box");
const nextBtn = quizBox.querySelector(".next");
const optionList = quizBox.querySelector(".option-list");
const resultBox = document.querySelector(".result-box");
const timeCount = quizBox.querySelector(".timer .sec");
const timeLine = quizBox.querySelector("header .timeline");
const timeOut = quizBox.querySelector(".timer .text");
const body = document.getElementsByTagName("body")[0];

// Klick-Ereignis für den "Start"-Button
startBtn.onclick = () => {
    infoBox.classList.add("activeInfo"); // Zeigt die Info-Box an
}

// Klick-Ereignis für den "Beenden"-Button
exitBtn.onclick = () => {
    infoBox.classList.remove("activeInfo"); // Verbirgt die Info-Box
}

// Klick-Ereignis für den "Weiter"-Button
continueBtn.onclick = () => {
    infoBox.classList.remove("activeInfo"); // Verbirgt die Info-Box
    quizBox.classList.add("activeQuiz"); // Zeigt das Quiz an
    showQuestions(0);
    queCount(1);
    startTimer(11); // Startet den Timer bei 10 Sekunden
    startTimeLine(0);
}

// Definition der globalen Variablen
let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 10;
let widthValue = 0;
let userScore = 0;

// Definition der Icons, die bei richtiger oder falscher Antwort angezeigt werden
let tickIcon = '<div class = "icon tick"><i class = "fas fa-check"></i></div>';
let crossIcon = '<div class = "icon wrong"><i class = "fas fa-times"></i></div>';

// Klick-Ereignis für den "Nächste"-Button
nextBtn.onclick = () => {
    if (que_count < questions.length - 1) { // Wenn es noch Fragen im Fragen-Array gibt
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCount(que_numb);
        clearInterval(counter); // Timer zurücksetzen
        clearInterval(counterLine); // Fortschrittslinie zurücksetzen
        startTimer(timeValue);
        startTimeLine(widthValue);
        nextBtn.style.display = "none"; // Verbirgt den "Nächste"-Button
        body.classList.remove("right"); // Entfernt den "right"-Stil
        body.classList.remove("wrong"); // Entfernt den "wrong"-Stil
        timeLine.classList.remove("right");
        timeLine.classList.remove("wrong");
    } else { // Wenn keine Fragen mehr vorhanden sind
        clearInterval(counter);
        clearInterval(counterLine);
        showResultBox();
        quizBox.classList.remove("activeQuiz"); // Verbirgt das Quiz
        resultBox.classList.add("activeResult"); // Zeigt das Ergebnis an
        timeOut.textContent = "Time left";
    }
};
   
// Klick-Ereignis für den "Erneut spielen"-Button
const replayBtn = resultBox.querySelector(".buttons .restart");
replayBtn.onclick = () => {
    alert("Get ready");
    quizBox.classList.add("activeQuiz"); // Zeigt das Quiz erneut an
    resultBox.classList.remove("activeResult"); // Verbirgt das Ergebnisfenster
    timeValue = 10;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); // zeigt die erste Frage erneut an
    queCount(que_numb);
    clearInterval(counter); // Timer zurücksetzen
    clearInterval(counterLine); // Fortschrittslinie zurücksetzen
    startTimer(timeValue);
    startTimeLine(widthValue);
    timeOut.textContent = "Time left"; // setzt den Text für die verbleibende Zeit zurück
    nextBtn.classList.remove("show"); // Verbirgt den "Nächste"-Button
    timeLine.classList.remove("right"); // Entfernt den "right"-Stil von der Zeitleiste
    timeLine.classList.remove("wrong"); // Entfernt den "wrong"-Stil von der Zeitleiste
    quizBox.classList.remove("oops"); // Entfernt den "oops"-Stil von der Quiz-Box
};

// Klick-Ereignis für den "Beenden"-Button
const quitBtn = resultBox.querySelector(".buttons .exit");
quitBtn.onclick = () => {
    window.location.reload(); // Lädt die Seite neu
}

// Funktion, um Fragen anzuzeigen
function showQuestions(index) {
    const queText = document.querySelector(".question"); // Holt das Frage-Text-Element

    // Erstellt den Fragen-Text basierend auf dem aktuellen Index
    let queTag = "<span>" +
        questions[index].number +
        ". " +
        questions[index].question +
        "</span>";

    // Erstellt die Optionen basierend auf dem aktuellen Index
    let optionsTag =
        '<div class = "option">' +
        questions[index].options[0] +
        '<span></span></div>' +
        '<div class = "option">' +
        questions[index].options[1] +
        '<span></span></div>' +
        '<div class = "option">' +
        questions[index].options[2] +
        '<span></span></div>' +
        '<div class = "option">' +
        questions[index].options[3] +
        '<span></span></div>';

    // Setzt den Fragen- und Optionen-Text im HTML
    queText.innerHTML = queTag;
    optionList.innerHTML = optionsTag;

    // Mischen der Optionen, um sie zufällig anzuzeigen
    for (let i of questions) {
        i.options.sort(() => Math.random() - 0.5);
    }

    // Fügt jedem Optionselement ein Klick-Ereignis hinzu
    const option = optionList.querySelectorAll(".option");
    for (let x = 0; x < option.length; x++) {
        option[x].setAttribute("onclick", "optionSelected(this)");
    }
    }
 
// Funktion zum Starten des Timers
function startTimer(time) {
    // Setzt einen Intervall, der jede Sekunde (1000ms) die Funktion 'timer' aufruft
    counter = setInterval(timer, 1000);

    function timer() {
        // Setzt die verbleibende Zeit in das 'timeCount'-Element
        timeCount.textContent = time;
        time--; // Reduziert die Zeit um 1 Sekunde
        timeOut.textContent = "Time left"; // Setzt den Text für die verbleibende Zeit

        // Fügt eine führende '0' hinzu, wenn die Zeit kleiner als 10 Sekunden ist
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }

        // Wenn die Zeit abgelaufen ist
        if (time < 0) {
            clearInterval(counter); // Stoppt den Timer
            timeCount.textContent = "00"; // Setzt die Zeit auf '00'
            timeOut.textContent = "Time Up"; // Informiert den Benutzer, dass die Zeit abgelaufen ist

            let correctAns = questions[que_count].answer; // Holt die richtige Antwort aus den Fragen
            let allOptions = optionList.children.length;

            // Wenn der Benutzer die falsche Antwort ausgewählt hat, markiert es die richtige Antwort automatisch
            for (let x = 0; x < allOptions; x++) {
                if (optionList.children[x].textContent == correctAns) {
                    optionList.children[x].setAttribute("class", "option correct"); // Markiert die richtige Antwort
                    optionList.children[x].insertAdjacentHTML("beforeend", tickIcon); // Fügt ein Häkchen-Symbol hinzu
                }
            }

            // Deaktiviert alle Optionen, nachdem eine ausgewählt wurde
            for (let x = 0; x < allOptions; x++) {
                optionList.children[x].classList.add("disabled");
            }

            // Zeigt den "Nächste"-Button an, nachdem eine Option ausgewählt wurde
            nextBtn.style.display = "block";
        }
    }
}

// Funktion, die die Fortschrittslinie (timeline) des Quizzes startet
function startTimeLine(time) {
    // Setzt einen Intervall, der alle 30.5ms die Funktion 'timer' aufruft
    counterLine = setInterval(timer, 30.5);
    
    function timer() {
        time += 1;  // Zeit wird inkrementiert
        timeLine.style.width = time + "px";  // Die Breite der Timeline wird entsprechend der Zeit aktualisiert
        
        // Wenn die Zeit > 350, wird der Intervall gestoppt (d.h. die Timeline hat das Ende erreicht)
        if (time > 350) {
            clearInterval(counterLine);
        }
    }
}

// Funktion zum Anzeigen des Ergebnisfelds am Ende des Quizzes
function showResultBox() {
    // Versteckt die Info- und Quiz-Felder
    infoBox.classList.remove("activeQuiz");
    quizBox.classList.remove("activeQuiz");
    
    // Zeigt das Ergebnisfeld an
    resultBox.classList.add("activeResult");
    
    // Entfernt Klassen für richtige und falsche Antworten
    body.classList.remove("right");
    body.classList.remove("wrong");

    // Referenz zum Platz, wo der Punktestand angezeigt wird
    const scoreText = resultBox.querySelector(".score-text");

    // Abhängig von der Punktzahl des Benutzers wird ein anderer Text angezeigt
    if (userScore == questions.length) {
        let scoreTag = '<span>🥳👌Perfect!! you got<p>' +
            userScore +
            '</p>out of<p>' +
            questions.length +
            '</p>questions</span>';
        scoreText.innerHTML = scoreTag;
    } else if (userScore > 6) {
        let scoreTag = '<span>💫Congrats! you got<p>' +
            userScore +
            '</p>out of<p>' +
            questions.length +
            '</p>questions</span>';
        scoreText.innerHTML = scoreTag;
    } else if (userScore > 3) {
        let scoreTag = '<span>👍Nice, you got<p>' +
            userScore +
            '</p>out of<p>' +
            questions.length +
            '</p>questions</span>';
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<span>😟Sadly, you only got<p>' +
            userScore +
            '</p>out of<p>' +
            questions.length +
            '</p>questions</span>';
        scoreText.innerHTML = scoreTag;
    }
}
     
// Funktion, um die aktuelle Frageanzahl anzuzeigen
function queCount(index) {
    // Referenz zur Stelle im Quiz-Fenster, wo die Gesamtzahl der Fragen angezeigt wird
    const bottomQueCount = quizBox.querySelector(".total-questions");

    // Erstellt den Text, der die aktuelle Frage und die Gesamtzahl der Fragen anzeigt
    let totalQuestionsCount = 
        '<span><p>' + 
        index + 
        '</p>of<p>' + 
        questions.length + 
        '</p>Questions</span>';

    // Zeigt den oben erstellten Text im Quiz-Fenster an
    bottomQueCount.innerHTML = totalQuestionsCount;
}

// Funktion, die aufgerufen wird, wenn eine Antwortoption ausgewählt wird
function optionSelected(answer) {
    clearInterval(counter);      // Stoppt den Timer
    clearInterval(counterLine); // Stoppt die Fortschrittslinie

    let userAns = answer.textContent;   // Die vom Benutzer ausgewählte Antwort
    let correctAns = questions[que_count].answer; // Die korrekte Antwort für die aktuelle Frage
    let allOptions = optionList.children.length;  // Gesamtanzahl der Antwortoptionen

    // Wenn die vom Benutzer ausgewählte Antwort korrekt ist
    if (userAns == correctAns) {
        userScore += 1;  // Erhöht den Punktestand des Benutzers
        answer.classList.add("correct");  // Markiert die Antwort als richtig
        answer.insertAdjacentHTML("beforeend", tickIcon);  // Fügt das Kontrollkästchen-Icon hinzu
        body.classList.add("right");  // Fügt eine Klasse zum Hauptkörper hinzu (möglicherweise für Styling-Zwecke)
        timeLine.classList.add("right"); // Zeigt die Timeline als korrekt an
    } else {
        var myQuizBox = false;
        if (myQuizBox) clearTimeout(myquizBox); // Verzögerung löschen, wenn sie existiert
        myQuizBox = setTimeout(function() {
            quizBox.style.animation = '';
        }, 500);  // Setzt die Animation des Quiz-Fensters zurück

        answer.classList.add("incorrect"); // Markiert die Antwort als falsch
        answer.insertAdjacentHTML("beforeend", crossIcon);  // Fügt das Kreuz-Icon hinzu
        quizBox.style.animation = "shake 0.25s 2";  // Fügt eine "shake"-Animation zum Quiz-Fenster hinzu
        body.classList.add("wrong");    // Fügt eine Klasse zum Hauptkörper hinzu (möglicherweise für Styling-Zwecke)
        timeLine.classList.add("wrong"); // Zeigt die Timeline als falsch an
        window.navigator.vibrate([500]);  // Lässt das Telefon vibrieren, wenn unterstützt

        // Schleife durch alle Optionen und markiere die korrekte Antwort, wenn die vom Benutzer ausgewählte Antwort falsch ist
        for (let x = 0; x < allOptions; x++) {
            if (optionList.children[x].textContent == correctAns) {
                optionList.children[x].setAttribute("class", "option correct");
                optionList.children[x].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    // Deaktiviert alle Optionen, nachdem eine ausgewählt wurde
    for (let x = 0; x < allOptions; x++) {
        optionList.children[x].classList.add("disabled");
    }
    
    nextBtn.style.display = "block"; // Zeigt den "Weiter"-Button an, sobald eine Option ausgewählt wurde
}          
