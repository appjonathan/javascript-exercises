document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Absenden des Formulars
  
    // Formularfelder abrufen
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var birthdate = document.getElementById("birthdate").value;
  
    // Überprüfen, ob alle Felder ausgefüllt sind
    if (firstName === "" || lastName === "" || email === "" || birthdate === "") {
      alert("Bitte füllen Sie alle Felder aus.");
      return;
    }
  
    // Überprüfen, ob die E-Mail-Adresse gültig ist
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
  
    // Überprüfen, ob das Geburtsdatum im richtigen Format ist
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthdate)) {
      alert("Bitte geben Sie das Geburtsdatum im Format YYYY-MM-DD ein.");
      return;
    }
  
    // Erfolgsmeldung anzeigen und eingegebene Informationen anzeigen
    alert("Formular erfolgreich abgesendet!");
    console.log("Vorname: " + firstName);
    console.log("Nachname: " + lastName);
    console.log("E-Mail: " + email);
    console.log("Geburtsdatum: " + birthdate);
  });