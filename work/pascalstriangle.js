//pascals triange is a triangle with each line either being 1 or the sum of the two elements above it

//    1
//   1 1
//  1 2 1
// 1 3 3 1
//1 4 6 4 1

// how to find nth row of pascals triangle? 
//define a function that takes in n
//loop starting at i = 2 until < i = n

pascal = n => {
	var result = [];
	result[0] = [1]
	result[1] = [1,1]

	for (var row = 2; row < n; row ++) {
		result[row] = [1];
		for (var col = 1; col <= row -1; col++) {
			result[row][col] = result[row-1][col] + result[row-1][col-1];
			result[row].push(1);
		}
	}

	return result;
}


// start with starter two dimensional array of first two lines of pascals triangle
// outer loop that signifies the rows of triangle starting at row 3 until rows are = n
// the first column of each row is 1
// inner loop signifies the columns of each row. after column 1, each column is equal
// to the previous rows column at the same indice + indice - 1
// we continue adding columns until the row number - 1
// the last column in each row is equal to 1
// after the double loop is completed return the result
// this is a quadratic, highly inefficient algorithm
console.log(pascal(7));

// 1/24