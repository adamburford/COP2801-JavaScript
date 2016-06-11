/* 	Adam Burford SPC ID#2128018
	COP2801 JavaScript #399
	Assignment #2 - calendar.js
*/

var May2012 = [ "MAY 2012",
		["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		["", "", 1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10, 11, 12],
		[13, 14, 15, 16, 17, 18, 19],
		[20, 21, 22, 23, 24, 25, 27],
		[28, 29, 30, 31, "", "", ""]];

console.log(May2012[0]);
for (var i = 1; i < May2012.length; i++)
{
    var line = "";

    for (var j = 0; j < May2012[i].length; j++)
		line += (May2012[i][j] + " ".repeat(10)).slice(0,10);

    console.log(line);
}