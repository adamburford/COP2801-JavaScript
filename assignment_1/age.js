/* 	Adam Burford SPC ID#2128018
	COP2801 JavaScript #399
*/

console.log("This program computes the approximate age in seconds of an individual based on a date of birth.\nOnly ages for dates of birth from 1900 and after can be computed.\n");

var monthBorn = 4;
var dayBorn = 12;
var yearBorn = 1981; 

console.log("Month Born: " + monthBorn);
console.log("Day Born: " + dayBorn);
console.log("Year Born: " + yearBorn);

var secondsOld = Math.round((Date.now() - Date.UTC(yearBorn, monthBorn, dayBorn, 0,0,0,0)) / 1000);

console.log("You are approximately " + secondsOld + " seconds old.");