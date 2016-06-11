/* 	Adam Burford SPC ID#2128018
	COP2801 JavaScript #399
*/

console.log("This program will calculate a restaurant tab for a couple with a gift certificate, with a restaurant tax of 8.0%");

var giftCertificate = 200;
console.log("Amount of gift certificate: " + giftCertificate);
console.log('\n');

// Person 1
var appetizer1 = 5.50;
var entree1 = 21.50;
var drinks1 = 4.25;
var dessert1 = 6.00;
console.log("Ordered Items for person 1")
console.log("Appetizer: " + appetizer1.toFixed(2));
console.log("Entrée: " + entree1.toFixed(2));
console.log("Drinks: " + drinks1.toFixed(2));
console.log("Dessert: " + dessert1.toFixed(2));
console.log('\n');

// Person 2
var appetizer2 = 6.25;
var entree2 = 18.50;
var drinks2 = 6.50;
var dessert2 = 5.50;
console.log("Ordered Items for person 2")
console.log("Appetizer: " + appetizer2.toFixed(2));
console.log("Entrée: " + entree2.toFixed(2));
console.log("Drinks: " + drinks2.toFixed(2));
console.log("Dessert: " + dessert2.toFixed(2));
console.log('\n');

var total = appetizer1 + entree1 + drinks1 + dessert1 + appetizer2 + entree2 + drinks2 + dessert2;
console.log("Ordered Items: $" + total.toFixed(2));

var tax = total * 0.08;
console.log("Restaurant tax: $" + tax.toFixed(2));

var tab = (total + tax) - giftCertificate;
console.log("Tab: $" + tab.toFixed(2));
console.log("(negative amount indicates unused amount of gift certificate)");

