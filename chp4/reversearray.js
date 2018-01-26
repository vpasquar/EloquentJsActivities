let array = [1,2,3,4,5];
let array2 = [1,2,3,4,5,6,7,8,9,10];

reverseArray = array => {
	const newArray = []
	for (x = array.length-1; x >= 0; x--) {
		newArray.push(array[x])
	} 
	  return newArray;
}



reverseArrayInPlace = array => {
   for (var x = 0; x < Math.floor(array.length / 2); x++) {
   	   let temp = array[x];
   	   array[x] = array[array.length - 1 - x];
   	   array[array.length-1-x] = temp;
   }
      return array;
}

console.log(reverseArrayInPlace(array2));