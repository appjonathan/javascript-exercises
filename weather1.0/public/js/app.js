// Die URL des Wetter-Endpoints, mit dem Anfragen an den Server gesendet werden.
let weatherApi = "/weather"

// Referenz zum Formular-Element im HTML. Dies wird verwendet, um das Absenden des Formulars zu überwachen.
const weatherForm = document.querySelector("form")

// Referenz zum Eingabe-Element im HTML. Dies wird verwendet, um den eingegebenen Suchbegriff (z.B. den Ortsnamen) abzurufen.
const search = document.querySelector("input")

// Referenz zum Icon-Element im HTML, das das aktuelle Wetter darstellt.
const weatherIcon = document.querySelector(".weatherIcon i")

// Referenz zum Element im HTML, das den aktuellen Wetterzustand (z.B. "Klarer Himmel") anzeigt.
const weatherCondition = document.querySelector(".weatherCondition")

// Referenz zum Element im HTML, das die aktuelle Windgeschwindigkeit anzeigt.
const windSpeed = document.querySelector(".windSpeed")

// Referenz zum Element im HTML, das die aktuelle Temperatur anzeigt.
const tempElement = document.querySelector(".temperature span")

// Referenz zum Element im HTML, das den aktuellen Humidity anzeigt.
const humidityElement = document.querySelector(".humidity")

// Referenz zum Element im HTML, das den aktuellen Atmosphärendruck anzeigt.
const atmospherePressureElement = document.querySelector(".atmospherePressure")

// Referenz zum Ortselement im HTML. Dies zeigt den Namen des Ortes an, für den das Wetter abgerufen wurde.
const locationElement = document.querySelector(".place")

// Variable, die den aktuellen Temperaturmodus (Celsius oder Fahrenheit) speichert.
let currentTempMode = "C"

// Referenz zum Datums-Element im HTML, das das aktuelle Datum anzeigt.
const dateElement = document.querySelector(".date")

// Abrufen des aktuellen Datums.
const currentDate = new Date()

// Optionen, um nur den Monatsnamen aus dem Datum abzurufen.
const options = { month: "long" }

// Abrufen des Monatsnamens aus dem aktuellen Datum.
const monthName = currentDate.toLocaleString("en-US", options)

// Abrufen des aktuellen Jahres aus dem Datum.
const year = currentDate.getFullYear()

// Setzen des Textinhalts des Datums-Elements auf das formatierte aktuelle Datum.
dateElement.textContent = new Date().getDate() + "." + monthName + " " + year




// Fügt einen Event-Listener zum 'submit' Ereignis des Formulars hinzu.
// Dies wird ausgelöst, wenn der Benutzer das Formular abschickt (z.B. durch Drücken der Enter-Taste oder Klicken auf einen Absenden-Button).
weatherForm.addEventListener("submit", (e) => {
  
  // Verhindert das standardmäßige Verhalten des Browsers beim Absenden eines Formulars.
  // Normalerweise würde der Browser die Seite neu laden und die Formulardaten an den Server senden.
  // Durch Aufrufen von e.preventDefault() wird dies verhindert, so dass das Formular mit JavaScript verarbeitet werden kann.
  e.preventDefault()
  
  // Setzt den Inhalt des Ortselements zurück, um den Benutzer darüber zu informieren, dass die Stadt nicht gefunden wurde.
  // Dies ist nur ein Platzhalter, bis die tatsächlichen Wetterdaten abgerufen werden.
  locationElement.textContent = "Stadt wurde nicht gefunden."
  
  // Setzt das Klassenattribut des Wetter-Symbols zurück. Dies könnte verwendet werden, um das Symbol später basierend auf den Wetterdaten zu ändern.
  weatherIcon.className = ""
  
  // Setzt den Inhalt der verschiedenen Wetterinformationen zurück.
  tempElement.textContent = ""
  weatherCondition.textContent = ""
  humidityElement.textContent = ""
  atmospherePressureElement.textContent = ""
  windSpeed.textContent = ""

  // Ruft die Funktion showData auf und übergibt den Wert des Suchfelds.
  // Diese Funktion sollte die Wetterdaten für die eingegebene Stadt abrufen und anzeigen.
  showData(search.value)
});




// Fügt einen Event-Listener zum 'click' Ereignis des Elements mit der Klasse '.toggleTemp-button' hinzu.
// Dies wird ausgelöst, wenn der Benutzer auf das Element klickt.
document.querySelector(".toggleTemp-button").addEventListener("click", function() {
  
  // Überprüft den aktuellen Temperaturmodus.
  // Wenn er auf "C" (Celsius) gesetzt ist, ändert er den Modus zu "F" (Fahrenheit) und aktualisiert den Button-Text.
  if (currentTempMode === "C") {
    currentTempMode = "F"           // Setzt den Temperaturmodus auf Fahrenheit.
    this.textContent = "Celsius"   // Ändert den Text des Buttons zu "Celsius".
  } 
  // Wenn der aktuelle Modus "F" (Fahrenheit) ist, ändert er ihn zurück zu "C" (Celsius) und aktualisiert den Button-Text.
  else {
    currentTempMode = "C"               // Setzt den Temperaturmodus auf Celsius zurück.
    this.textContent = "Fahrenheit"    // Ändert den Text des Buttons zu "Fahrenheit".
  }
  
  // Ruft die Funktion updateTemperatureDisplay auf.
  // Diese Funktion sollte die aktuelle Temperaturanzeige basierend auf dem ausgewählten Temperaturmodus (Celsius oder Fahrenheit) aktualisieren.
  updateTemperatureDisplay()
})




/**
 * Ruft Wetterdaten für eine bestimmte Stadt ab und zeigt diese Daten in der UI an.
 *
 * @param {string} city - Der Name der Stadt, für die Wetterdaten abgerufen werden sollen.
 */
function showData(city) {
  
  // Ruft Wetterdaten für die angegebene Stadt mithilfe der getWeatherData Funktion ab.
  getWeatherData(city, (result) => {
    // Zeigt die abgerufenen Wetterdaten in der Konsole an.
    console.log(result)

    // Überprüft, ob der Abruf der Wetterdaten erfolgreich war.
    if (result.cod == 200) {

      // Aktualisiert die Liste der Lieblingsorte des Benutzers.
      updateFavoritePlaces() 

      // Berechnet die Temperatur in Celsius und Fahrenheit.
      const tempCelsius = (result?.main?.temp - 273.15).toFixed(0)
      const tempFahrenheit = ((tempCelsius * 9/5) + 32).toFixed(0)

      // Zeigt den Umschalt-Button für die Temperaturanzeige an.
      document.querySelector(".toggleTemp-button").style.display = "block"

      // Setzt das Wetter-Icon auf eine allgemeine bewölkte Darstellung.
      // (Dies könnte weiter angepasst werden, um verschiedene Icons basierend auf den tatsächlichen Wetterbedingungen anzuzeigen.)
      weatherIcon.className = "wi wi-day-cloudy"

      // Zeigt den Namen der Stadt an.
      locationElement.textContent = result?.name

      // Zeigt die Temperaturen in Celsius und Fahrenheit an.
      document.querySelector(".tempElementCelsius span").textContent = tempCelsius + "°C"
      document.querySelector(".tempElementFahrenheit span").textContent = tempFahrenheit + "°F"

      // Aktualisiert die Temperaturanzeige basierend auf dem aktuellen Modus (Celsius oder Fahrenheit).
      updateTemperatureDisplay()
      
      // Zeigt die Wetterbeschreibung (z.B. "klarer Himmel", "leichter Regen" usw.) an.
      weatherCondition.textContent = result?.weather[0]?.description?.toUpperCase()

      // Zeigt die Windgeschwindigkeit an.
      windSpeed.textContent = 'Wind: ' + result?.wind["speed"]

      humidityElement.textContent = 'Feuchtigkeit: ' + result?.main["humidity"]

      atmospherePressureElement.textContent = 'Atmosphärendruck: ' + result?.main["pressure"]
      
    } 
    // Falls die Stadt nicht gefunden wurde oder ein anderer Fehler aufgetreten ist.
    else {
      locationElement.textContent = "Stadt wurde nicht gefunden."
    }
  })
}





/**
 * Sobald das DOM (Document Object Model) vollständig geladen ist, wird dieser Codeblock ausgeführt.
 */
document.addEventListener("DOMContentLoaded", function() {
  
  // Ein Fetch-Request wird gesendet, um den Inhalt von 'menu.html' abzurufen.
  fetch('/menu.html')
      .then(response => response.text())  // Die Antwort wird als Text interpretiert.
      .then(content => {
          
          // Der Inhalt von 'menu.html' wird in das Element mit der ID 'menuPlaceholder' eingefügt.
          document.getElementById('menuPlaceholder').innerHTML = content

          // Überprüft, ob ein Cookie mit dem Namen 'username' vorhanden ist.
          if (document.cookie.split(';').some((item) => item.trim().startsWith('username='))) {
              
              // Wenn ein 'username' Cookie gefunden wird, wird das Logout-Element im Menü angezeigt.
              document.getElementById('logout').style.display = 'block'
          }
      })
      // Falls beim Abrufen des Menüs ein Fehler auftritt, wird dieser in der Konsole protokolliert.
      .catch(error => console.error('Error loading the menu:', error))
})





/**
 * Sobald das DOM (Document Object Model) vollständig geladen ist, wird dieser Codeblock ausgeführt.
 */
document.addEventListener("DOMContentLoaded", function() {
  
  // Die folgende Zeile überprüft alle Cookies der aktuellen Webseite.
  // Es wird nach einem Cookie gesucht, der mit 'username=' beginnt, um festzustellen, ob der Benutzer eingeloggt ist.
  if (document.cookie.split(';').some((item) => item.trim().startsWith('username='))) {
      
      // Wenn ein 'username' Cookie gefunden wird (was bedeutet, dass der Benutzer eingeloggt ist),
      // wird das Logout-Element im Menü angezeigt.
      document.getElementById('logout').style.display = 'block'
  }
});





/**
 * Sobald das DOM (Document Object Model) vollständig geladen ist, wird dieser Codeblock ausgeführt.
 */
document.addEventListener("DOMContentLoaded", function() {

  // Ein HTTP-GET-Request wird an den Server gesendet, um die Lieblingsorte des Benutzers abzurufen.
  fetch('/get-favorite-places')
      .then(response => {
          
          // Die Antwort des Servers wird als JSON interpretiert.
          return response.json()
      })
      .then(data => {
          
          // Ein Referenzpunkt zum <ul>-Element, in dem die Lieblingsorte angezeigt werden sollen.
          const placesList = document.getElementById('placesList')
          
          // Für jeden Lieblingsort im Datenarray wird ein neues <li>-Element erstellt.
          data.favoritePlaces.forEach(place => {
              
              // Erstellen eines neuen <li>-Elements.
              const li = document.createElement('li')
              
              // Setzen des Textinhalts des <li>-Elements auf den Namen des Ortes.
              li.textContent = place;
              
              // Hinzufügen eines EventListeners zum <li>-Element. Wenn der Benutzer auf den Ort klickt...
              li.addEventListener('click', function() {
                  
                  // ...wird der Ort in das Suchfeld eingegeben.
                  document.querySelector("input").value = place
                  
                  // Und die Wetterdaten für diesen Ort werden abgerufen.
                  showData(place)
              });
              
              // Das <li>-Element wird dem <ul>-Element hinzugefügt.
              placesList.appendChild(li)
          });
      })
      
      // Falls ein Fehler auftritt (z.B. der Server antwortet nicht), wird eine Fehlermeldung in der Konsole angezeigt.
      .catch(error => console.error('Error fetching favorite places:', error))
});





/**
 * Diese Funktion ruft die Lieblingsorte des Benutzers ab und zeigt sie in einer Liste an.
 */
function updateFavoritePlaces() {

  // Ein HTTP-GET-Request wird an den Server gesendet, um die Lieblingsorte des Benutzers abzurufen.
  fetch('/get-favorite-places')
      .then(response => {
          
          // Die Antwort des Servers wird als JSON interpretiert.
          return response.json()
      })
      .then(data => {
          
          // Ein Referenzpunkt zum <ul>-Element, in dem die Lieblingsorte angezeigt werden sollen.
          const placesList = document.getElementById('placesList')
          
          // Entfernt alle vorhandenen Einträge im <ul>-Element, um alte Daten zu löschen.
          while (placesList.firstChild) {
              placesList.removeChild(placesList.firstChild)
          }
          
          // Überprüft, ob Daten vorhanden sind und ob die Daten das Attribut 'favoritePlaces' enthalten.
          if (data && data.favoritePlaces) {
              
              // Für jeden Lieblingsort im Datenarray wird ein neues <li>-Element erstellt.
              data.favoritePlaces.forEach(place => {
                  
                  // Erstellen eines neuen <li>-Elements.
                  const li = document.createElement('li')
                  
                  // Setzen des Textinhalts des <li>-Elements auf den Namen des Ortes.
                  li.textContent = place;
                  
                  // Hinzufügen eines EventListeners zum <li>-Element. Wenn der Benutzer auf den Ort klickt...
                  li.addEventListener('click', function() {
                      
                      // ...wird der Ort in das Suchfeld eingegeben.
                      document.querySelector("input").value = place
                      
                      // Und die Wetterdaten für diesen Ort werden abgerufen.
                      showData(place)
                  });
                  
                  // Das <li>-Element wird dem <ul>-Element hinzugefügt.
                  placesList.appendChild(li)
              });
          }
      })
      
      // Falls ein Fehler auftritt (z.B. der Server antwortet nicht), wird eine Fehlermeldung in der Konsole angezeigt.
      .catch(error => console.error('Error fetching favorite places:', error))
}




/**
 * Dieser EventListener wird hinzugefügt, um sicherzustellen, dass JavaScript-Code erst ausgeführt wird,
 * nachdem das gesamte Dokument vollständig geladen wurde.
 */
document.addEventListener("DOMContentLoaded", function() {
    
  // Sobald das Dokument vollständig geladen ist, wird die Funktion `updateFavoritePlaces` aufgerufen.
  // Diese Funktion ruft die Lieblingsorte des Benutzers ab und zeigt sie in der Benutzeroberfläche an.
  updateFavoritePlaces()

})





/**
 * Diese Funktion aktualisiert die Temperaturanzeige basierend auf dem aktuellen Temperaturmodus (`currentTempMode`).
 * Der Temperaturmodus kann entweder "C" für Celsius oder "F" für Fahrenheit sein.
 */
function updateTemperatureDisplay() {
  // Holen Sie sich die HTML-Elemente für die Celsius- und Fahrenheit-Temperaturanzeigen.
  const tempElementCelsiusDiv = document.querySelector(".tempElementCelsius")
  const tempElementFahrenheitDiv = document.querySelector(".tempElementFahrenheit")

  // Überprüfen Sie, welcher Temperaturmodus aktuell aktiv ist.
  if (currentTempMode === "C") {
    // Wenn der Modus "Celsius" ist, zeigen Sie den Celsius-Wert an und verbergen Sie den Fahrenheit-Wert.
    tempElementCelsiusDiv.style.display = "block"
    tempElementFahrenheitDiv.style.display = "none"
  } else {
    // Wenn der Modus "Fahrenheit" ist, zeigen Sie den Fahrenheit-Wert an und verbergen Sie den Celsius-Wert.
    tempElementCelsiusDiv.style.display = "none"
    tempElementFahrenheitDiv.style.display = "block"
  }
}





/**
 * Diese Funktion ruft Wetterdaten für eine bestimmte Stadt ab und gibt die Daten über einen Callback zurück.
 * 
 * @param {string} city - Der Name der Stadt, für die Wetterdaten abgerufen werden sollen.
 * @param {function} callback - Ein Callback, der aufgerufen wird, sobald die Wetterdaten abgerufen wurden.
 */
function getWeatherData(city, callback) {
  // Erstellen Sie die vollständige URL für die Wetter-API, indem Sie die Basis-URL `weatherApi` mit der Stadt kombinieren.
  const locationApi = weatherApi + "?address=" + city

  // Verwenden Sie die `fetch`-Funktion, um eine Anfrage an die Wetter-API zu senden.
  fetch(locationApi).then((response) => {
    // Die Antwort von der API wird als JSON interpretiert.
    response.json().then((response) => {
      // Rufen Sie den bereitgestellten Callback mit den Wetterdaten als Argument auf.
      callback(response)
    })
  })
}




