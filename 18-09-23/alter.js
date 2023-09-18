const chalk = require("chalk");

function summeAusgeben(a, b) {
   let name ="Jonathan Epp"
   let sum = a + b 
   
    console.log((chalk.green(sum)),(chalk.red(name)))  
    }

  
module.exports = summeAusgeben;
  