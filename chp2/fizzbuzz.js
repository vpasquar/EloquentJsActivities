

function fizz() {
	for (x=1; x<101; x++) {
		if (x % 3 === 0) {
			if(x % 5 === 0) {
				console.log("Fizzbuzz");
			} else {
				console.log("Fizz");
			}

		} else if (x % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(x);
		}; 
	};
};

fizz();