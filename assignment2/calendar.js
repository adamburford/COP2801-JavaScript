/* 	Adam Burford SPC ID#2128018
	COP2801 JavaScript #399
	Assignment #2 - calendar.js
*/

( function () {
	
	const testMonth = 5; 		// May
	const testYear = 2012;		// 2012

	var calendar = makeCalendar(testMonth, testYear);
	printCalendar(calendar);
	
}) ();

function makeCalendar(month, year) {
	var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var monthsOfYear = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var daysInMonth;
	if (month == 2) {
		daysInMonth = 28;
		if (year % 4 == 0)
			daysInMonth++;
	}
	else
		daysInMonth = 30 + (month & 1);
	
	var first = dayOfWeek(1, month, year);
	var dayCount = 0;
	
	var calendar = new Array(7)
	calendar[0] = monthsOfYear[month - 1] + " " + year;
	calendar[1] = daysOfWeek;
	
	for (var i = 2; i < 7; i++)
		calendar[i] = new Array(7).fill("");
	
	while (dayCount < daysInMonth) {
		calendar[2 + Math.floor((dayCount+first) / 7)][(dayCount + first) % 7] = ++dayCount;
	}
	
	return calendar;
}

function printCalendar(calendar) {

	console.log(calendar[0] + '\n');
	for (var i = 1; i < calendar.length; i++)
	{
		var line = "";

		for (var j = 0; j < calendar[i].length; j++)
			line += (calendar[i][j] + " ".repeat(10)).slice(0,10);

		console.log(line);
	}
}

function dayOfWeek(d, m, y) {
	var convertMonth = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
	y -= m < 3;
	return (y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + convertMonth[m-1] + d) % 7;
}