
// isPrime = n => {
// 	let divisor = 3;
//     if (n % 2 == 0) {
//     	return false;
//     }

//  	while(n > divisor) {
// 		if (n % divisor == 0) {
// 			return false;
// 		} else {
			
// 			divisor += 2;
// 		}

// 	}

// 	return true;
// }


primeFactors = n => {
	let factors = []
	let divisor = 2


	while (n > divisor) {
		if (n % divisor == 0) {
			factors.push(divisor);
			factors.push((n/divisor))
			divisor++
		} else {
			divisor ++
		}
	}
	return factors;
};
console.log(primeFactors(4));
console.log(primeFactors(69));
console.log(primeFactors(400));
