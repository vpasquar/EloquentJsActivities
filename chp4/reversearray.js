// function takes array as argument and produces a new array
// with same elements in reverse order

function reverseArray(arr) {
	var newArray = [];
	for (var x = arr.length - 1; x > -1; x--) {
		newArray.push(arr[x]);
	}
	return newArray;
}

console.log(reverseArray(["A","B","C"]));

//function takes array and swaps its order

function reverseArrayInPlace(arr) {
	for (var x = 0; x < Math.floor(arr.length / 2); x ++) {
	   var temp = arr[x];
	   arr[x] = arr[arr.length - 1 - x];
	   arr[arr.length - 1 - x] = temp;
	} 
	 return arr;
}

console.log(reverseArrayInPlace([1,2,3,4,5]));