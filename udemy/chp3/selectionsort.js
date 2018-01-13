


selectionSort = arr => {

	for (let i = 0; i < arr.length- 1; i++) {
		let minIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}

		let tmp = arr[minIndex]
		arr[minIndex] = arr[i]
		arr[i] = tmp
	}
	return arr;
}

const arr = [7,4,3,10,1]

console.log(selectionSort(arr));

//running time is independent of ordering of elements