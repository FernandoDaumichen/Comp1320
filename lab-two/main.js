var getDayOftheWeeK = require ("./lab2.js").getDayOftheWeeK;
var makeCalendar = require ("./lab2.js"). makeCalendar;
var readline = require("readline-sync");

let Instructions = readline.question("USE ONLY NUMBER !!")
let year = readline.question("Type a year: ");
let month = readline.question("Type a month: ");
let day = readline.question("Type a day: ");
 

getDayOftheWeeK(year, month, day)
console.log (getDayOftheWeeK(year, month, day));




makeCalendar();