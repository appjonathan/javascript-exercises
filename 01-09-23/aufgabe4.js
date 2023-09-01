// Funktion zur Umrechnung von Fahrenheit in Celsius
function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9; 
    return celsius; 
  }
  
  // Funktion zur Umrechnung von Celsius in Fahrenheit
  function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32; 
    return fahrenheit; 
  }
  // Das Ergebnis wird auf der Konsole ausgegeben.
  console.log(convertToCelsius(32)); 
  console.log(convertToFahrenheit(0)); 