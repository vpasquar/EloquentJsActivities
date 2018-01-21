

var array = [9 , 2, 5, 6, 4, 3, 7, 10, 1, 8];

swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

bubbleSort = array => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 1; j < array.length; j++) {
           if(array[j-1] > array[j]) {
           	  swap(array, j - 1, j);
           }
		}
	}
	return array;
}

console.log(bubbleSort(array));