
var array = [9 , 2, 5, 6, 4, 3, 7, 10, 1, 8];

swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

selectionSort = array => {
  for (i = 0; i < array.length; i++){
  	let min = i
  	for (j = i + 1; j < array.length; j++) {
  		if (array[j] < array[min]) {
  			min = j
  		}
  	}

  	if (min !== j) {
  		swap(array,i,min);
  	}

  }
   return array;
}

console.log(selectionSort(array));