/* 	Adam Burford SPC ID#2128018
	COP2801 JavaScript #399
	Assignment 3 - credit.js
*/

(function () {
	var balance = 1500;
	var interestRate = 0.18;
	var monthlyInterestRate = interestRate / 12;
	var minimumPayment = calculateMinimumPayment(balance, interestRate);
	displayWelcome(balance, interestRate, minimumPayment);
	displayPayments(balance, monthlyInterestRate, minimumPayment)
})()


function displayWelcome(balance, interestRate, minimumPayment) {
	console.log("Credit Card Caluclator App");
	console.log("This program willl determine the length of time needed to pay off a credit card balance and the total interest paid.\n");
	console.log("Balance on your credit card: " + balance);
	console.log("Interest Rate: " + interestRate + "%");
	console.log("Assuming a minimum payment of 2% of the balance ($20 min)");
	console.log("Your minimum payment would be: $" + minimumPayment + '\n');
}

function calculateMinimumPayment(balance, interestRate) {
	return 20 > balance * 0.02 ? 20 : balance * 0.02;
}

function displayPayments(balance, monthlyInterestRate, minimumPayment) {
	var interestPaid = 0;
	var paymentNumber = 0;
	
	console.log("PAYOFF SCHEDULE\n------------------------------")
	console.log(fixedWidth("Year", 6) + fixedWidth("Balance", 8) + fixedWidth("Payment", 8) + fixedWidth("Interest", 9));
	console.log(fixedWidth("", 6) + fixedWidth("", 8) + fixedWidth("Number", 8) + fixedWidth("Paid", 9));
	console.log();
	
	while (balance > 0) {
		
		interestPaid += balance * 0.015;
		balance *= 1.015;
		
		if (balance > minimumPayment)
			balance -= minimumPayment;
		else
			balance = 0;
		
		console.log(fixedWidth(paymentNumber % 12 == 0 ? paymentNumber / 12 + 1 : "", 6) + fixedWidth(balance.toFixed(2), 8) + fixedWidth(++paymentNumber, 8) + fixedWidth(interestPaid.toFixed(2), 9));
	}
}

function fixedWidth(s, l) {
	if (typeof(s) != String)
		s = s.toString();
	return s.length >= l ? s.trim(0,l) : " ".repeat(Math.floor((l-s.length)/2)) + s + " ".repeat(Math.ceil((l-s.length)/2))
}
