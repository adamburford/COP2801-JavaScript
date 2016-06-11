/* 	Adam Burford SPC ID#2128018
	COP2801 JavaScript #399
	Assignment #2 - crypto.js
*/

var password = "Pizza2Day!";

console.log("Password \"Encryption\" Program");
console.log("Password: " + password);
password = password.split('');

var encryptionKey = {	"a" : "m", 
						"b" : "h",
						"c" : "t",
						"d" : "f",
						"e" : "g",
						"f" : "k",
						"g" : "b",
						"h" : "p",
						"i" : "j",
						"j" : "w",
						"k" : "e",
						"l" : "r",
						"m" : "q",
						"n" : "s",
						"o" : "l",
						"p" : "n",
						"q" : "i",
						"r" : "u",
						"s" : "o",
						"t" : "x",
						"u" : "z",
						"v" : "y",
						"w" : "v",
						"x" : "d",
						"y" : "c",
						"z" : "a",
					};
for (var key in encryptionKey)
	encryptionKey[key.toUpperCase()] = encryptionKey[key].toUpperCase();

var i = password.length;
while (i--)
	if (encryptionKey[password[i]] != undefined)
		password[i] = encryptionKey[password[i]];
	
password = password.join('');
console.log("Encrypted Password: " + password);