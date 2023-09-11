document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Absenden des Formulars
  
    // Formularfelder abrufen
    let vorname = document.getElementById("vorname").value;
    let nachname = document.getElementById("nachname").value;
    let email = document.getElementById("email").value;
    let geburtsdatum = document.getElementById("geburtsdatum").value;
  
    // Überprüfen, ob alle Felder ausgefüllt sind
    if (vorname === "" || nachname === "" || email === "" || geburtsdatum === "") {
      alert("Bitte füllen Sie alle Felder aus.");
      return;
    }
  
    // Überprüfen, ob die E-Mail-Adresse gültig ist
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
  
    // Überprüfen, ob das Geburtsdatum im richtigen Format ist (YYYY-MM-DD)
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(geburtsdatum)) {
      alert("Bitte geben Sie das Geburtsdatum im Format YYYY-MM-DD ein.");
      return;
    }
  
    // Erfolgsmeldung anzeigen und eingegebene Informationen anzeigen
    alert("Formular erfolgreich abgesendet!");
    console.log("Vorname: " + vorname);
    console.log("Nachname: " + nachname);
    console.log("E-Mail: " + email);
    console.log("Geburtsdatum: " + geburtsdatum);
  });