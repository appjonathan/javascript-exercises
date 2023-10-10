function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const avg = sum / arr.length;
    //console.log("Durchschnitt Zahlen:", avg);
    return avg; 
  }
  
function diffFromAvg(arr) {
    const avg = average(arr);
    const diffArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      const diff = arr[i] - avg;
      diffArr.push(diff);
    }
  
    console.log("Differenz ursprünglichen Zahlen zum Durchschnitt:", diffArr);
  }
 
function variance(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    const difference = max - min;
    return difference;
  }
  
function arrayToDigits(arr) {
    let result = 0;
  
    for (let i = 0; i < arr.length; i++) {
      result = result * 10 + arr[i];
    }
  
    return result;
  }
  
function makePerson(name, age) {
    return {
      name: name,
      age: age
    };
  }

function olderThan(age, persons) {
    const result = [];
  
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].age > age) {
        result.push(persons[i]);
      }
    }
  
    return result;
  }

function oldestPerson(persons) {
    let oldestAge = 0;
    let oldestName = "";
  
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].age > oldestAge) {
        oldestAge = persons[i].age;
        oldestName = persons[i].name;
      }
    }
  
    return oldestName;
  }

function averageAge(persons) {
    const ages = persons.map(person => person.age);
    return average(ages);
  }
  
//const numbers = [1, 2, 3, 4, 5];
//average(numbers);
//diffFromAvg(numbers);
//const result = variance(numbers);
//console.log("Abstand zwischen größter und kleinster Zahl:", result);
//const result = arrayToDigits(numbers);
//console.log("Einstellige ganze Zahlen als Ziffern EINER Zahl interpretiert:", result);
//console.log("Alle Personen"; persons);
//const filteredPersons = olderThan(35, persons);
//console.log("Personen älter als 35:",filteredPersons);
//const oldestName = oldestPerson(persons);
//console.log("Älteste Person:",oldestName);

const persons = [makePerson("Jonathan", 26),
  makePerson("Matze", 40),
  makePerson("Bartek", 40),
  makePerson("Chrisdoph", 35),
  makePerson("Lucas", 100)
];

const averageAgeResult = averageAge(persons);
console.log("Durchschnitt Alter:", averageAgeResult);