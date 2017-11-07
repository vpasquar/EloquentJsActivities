// takes string as argument and returns a number
// indicating how many uppercase B's in string

function countBs(string) {
	var count = 0
	for (x = 0; x < string.length; x++) {
		if (string.charAt(x) === "B") {
			count++
		}
	}
	return count;
} 

console.log(countBs("BoBBy"));

// takes a string and particular char and returns number of char specified

function countChar(string,char) {
	var count = 0
	for (y = 0; y < string.length; y++) {
		var temp = ''
		temp = string.charAt(y);
		if (temp === char) {
			count ++;
		}
	}
	return count;
}

console.log(countChar("Cookie Cutter", "C"));