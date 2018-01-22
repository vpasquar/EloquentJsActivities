//here we are just looking for the unique number in an array. 

var array = [1,1,2,3,3];

findUniqueNum = arr => {
	for (var i = 0; i < array.length; i++) {
		if (arr[i] !== arr[i+1] && arr[i] !== arr[i-1]) {
			return arr[i];
		}
	}
}

console.log(findUniqueNum(array));