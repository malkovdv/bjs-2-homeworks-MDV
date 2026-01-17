"use strict";

function solveEquation(a, b, c) {
	const d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return [];
	} else if (d === 0) {
		const x = -b / (2 * a);
		return [x];
	} else if (d > 0) {
		const x1 = (-b + Math.sqrt(d)) / (2 * a);
		const x2 = (-b - Math.sqrt(d)) / (2 * a);
		return [x1, x2];
	}
}

console.log(solveEquation(1, 1, 1))
console.log(solveEquation(2, 25, 8))
console.log(solveEquation(3, 64, 12))




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const p = Number(percent);
	const c = Number(contribution);
	const a = Number(amount);
	const m = Number(countMonths);

	if (isNaN(p) || isNaN(c) || isNaN(a) || isNaN(m)) {
		return false;
	}

	const creditBody = a - c;
	if (creditBody <= 0) {
		return 0;
	}

	const monthlyPercent = p / 100 / 12;
	const monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / ((1 + monthlyPercent) ** m - 1)));
	const totalPayment = monthlyPayment * m;

	return Number(totalPayment.toFixed(2));
}


console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));

