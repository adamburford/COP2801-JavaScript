/* 	Adam Burford SPC ID#2128018
	COP2801 JavaScript #399
*/

var weightLbs = 150;
var lbsToKg = 0.453592;
var atomsInAveragePerson = 7e27;
var atomsInPerson = (weightLbs * lbsToKg) / 70 * atomsInAveragePerson;

var atomsInUniverse = 10e80;
var percentUniverse = (atomsInPerson / atomsInUniverse) * 100;

console.log("This program will determine your place in the universe.");
console.log("Your weight in pounds: " + weightLbs);
console.log("You contain approximately " + atomsInPerson.toExponential(3));
console.log("Therefore, you comprise " + percentUniverse.toExponential(3) + "% of the universe");

