//==============================================================================
// CLASSES

//TODO: 1. Erstelle die beiden Klassen "Department" und "Employee"
class Company {
  constructor(name){
      this.name = name;
      this.departments = [];
  }
}
class Department {
  constructor(company, name, boss) {
      this.company = company;
      this.name = name;
      this.boss = boss;
      this.employees = [];
      company.departments.push(this);
  }
}
class Employee {
  constructor(department, name, salary) {
      this.department = department;
      this.name = name;
      this.salary = salary;
      department.employees.push(this);
  }
}
//==============================================================================
// OBJECT INSTANCES
const bigMoneyCorp = new Company("Big Money Corporations");

let finance = new Department(bigMoneyCorp, "Finance", "Gerhard Geldsack");
let hr = new Department(bigMoneyCorp, "Human Resources", "Albrecht Aasgeier");
let marketing = new Department(bigMoneyCorp, "Marketing", "Magnus McMamakind");

//TODO: 2. Füge ein weiteres Department hinzu
let it = new Department(bigMoneyCorp, "IT", "Ingo Internet");

//Wir speichern alle angestellten in einem einzigen Array:
let allEmployees = []
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
allEmployees.push(new Employee(it, "Ingo Internet", 2500000));
// TODO: 2. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.
allEmployees.push(new Employee(hr, "Albrecht Basgeier", 350003));
allEmployees.push(new Employee(hr, "Albrecht Casgeier", 350002));
allEmployees.push(new Employee(hr, "Albrecht Dasgeier", 350001));
allEmployees.push(new Employee(marketing, "Magnus AcMamakind", 235003));
allEmployees.push(new Employee(marketing, "Magnus BcMamakind", 235002));
allEmployees.push(new Employee(marketing, "Magnus CcMamakind", 235001));
allEmployees.push(new Employee(it, "Ingo Anternet", 250003));
allEmployees.push(new Employee(it, "Ingo Bnternet", 250002));
allEmployees.push(new Employee(it, "Ingo Cnternet", 250001));
//==============================================================================
// FUNCTIONS

//TODO: 4. Funktion getBoss
function getBoss(employee) {
  return allEmployees.find(emp => emp.name === employee.department.boss);
}

//TODO: 5. Funktion raiseIncome
function raiseIncome(department, amount) {
  department.employees
    .filter(employee => employee.name !== department.boss)
    .map(employee => employee.salary += amount);
}

//TODO: 6. Funktion doubleBossIncome
function doubleBossIncome(department) {
  let boss = department.employees.find(employee => employee.name === department.boss);
  boss.salary *= 2;
}

//TODO: 7. Funktion averageIncome
function averageIncome(department) {
  let totalSalary = department.employees.reduce((sum, employee) => sum + employee.salary, 0);
  return totalSalary / department.employees.length;
}

//==============================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)
function main(){
  
  //TODO: 3. Gib die Namen aller Angestellter auf der Konsole aus:
  console.log("Alle Angestellten:");
  allEmployees.map(employee => console.log(employee.name));
  console.log("-------------------------");
  
  //TODO: 3. Gib die Namen aller Angestellter in hr auf der Konsole aus:
  console.log("Angestellte in HR:");
  allEmployees
    .filter(employee => employee.department.name === "Human Resources")
    .map(employee => console.log(employee.name));
  console.log("-------------------------");
  
  //TODO: 3. Gib die Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr aus
  console.log("Angestellte mit Gehalt über 35K:");
  allEmployees
    .filter(employee => employee.salary > 35000)
    .map(employee => console.log(employee.name));
  console.log("-------------------------");
  
  //TODO: 4. Nutze die Funktion getBoss() um den Chef von "Andreas Armschlucker" zu finden und auszugeben.
  let andreas = allEmployees.find(employee => employee.name === "Andreas Armschlucker");
  let boss = getBoss(andreas);
  console.log("Boss von Andreas Armschlucker:", boss.name);
  console.log("-------------------------");
  
  //TODO: 5. Nutze die Funktion raiseIncome() um allen Angestellten, die in "Human Resources" arbeiten (Außer dem chef) 
  //         eine Gehaltserhöhung von 4000 im Jahr zu geben
  let hrDepartment = bigMoneyCorp.departments.find(department => department.name === "Human Resources");
  raiseIncome(hrDepartment, 4000);
  console.log("Angestellte in HR nach Gehaltserhöhung:");
  hrDepartment.employees.map(employee => console.log(employee.name, employee.salary));
  console.log("-------------------------");
  
  //TODO: 6. Nutze die Funktion doubleBossIncome() um dem Boss von HR das doppelte Gehalt zu geben
console.log("Boss-Einkommen:", boss.salary);
doubleBossIncome(hrDepartment);
console.log("Verdoppeltes Boss-Einkommen:", boss.salary);
console.log("-------------------------");
  
  //TODO: 7. Nutzt averageIncome() um euch das Durschnittsgehalt eures eigenen Departments ausgeben zu lassen.
  let myDepartment = allEmployees.find(employee => employee.name === "Ingo Internet").department;
  let avgIncome = averageIncome(myDepartment);
  console.log("Durchschnittsgehalt im IT-Department:", avgIncome);
}

main();