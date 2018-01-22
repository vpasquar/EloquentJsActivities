var array = ["true","true",true,1,1,1,4,5,6,8,8];



// this filter function replaces the need for a more wordy algorithm to remove duplicates from array
var test = array.filter((elem,index,arr) => arr.indexOf(elem) === index)

removeDuplicates = arr => {
	var uniqueArray = []
	return arr.filter((elem,index) => {
		if(uniqueArray.indexOf(elem) === -1) {
			uniqueArray.push(elem)
			return elem;
		}
	})
}
console.log(removeDuplicates(array));

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


// var rockets = [
//     { country:'Russia', launches:32 },
//     { country:'US', launches:23 },
//     { country:'China', launches:16 },
//     { country:'Europe(ESA)', launches:7 },
//     { country:'India', launches:4 },
//     { country:'Japan', launches:3 }
// ];


// var scores = [7,3,5,2,7,9,2];

// var sumscores = scores.reduce((valCount, elem) => {
// 	return valCount + elem
// }, 0)
// var sum = rockets.reduce((prevVal, elem) => {
// 	return prevVal + elem.launches
// }, 0);


// console.log(sum);
// console.log(sumscores);