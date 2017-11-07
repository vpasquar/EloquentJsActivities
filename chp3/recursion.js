// recursive function to find whether an number passed as an argument 
// is even or odd without using %

function isEven(num) {
	if (num == 0) { 
		return true; // is even
	} else if (num == 1) {
		return false; // is odd
	} else if (num < 0)	{
		return isEven(-num)
	} else {
		return isEven(num - 2);
	}
};

console.log(isEven(50));
console.log(isEven(-75));
