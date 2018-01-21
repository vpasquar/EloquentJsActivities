var array = [1,1,1,4,5,6,8,8];



// this filter function replaces the need for a more wordy algorithm to remove duplicates from array
var test = array.filter((elem,index,arr) => arr.indexOf(elem) === index)

console.log(test);

removeDups = (arr) => {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (newArr.indexOf(arr[i]) === -1) {
			newArr.push(arr[i]);
		}
	}

	return newArr;
}

console.log(removeDups(array));