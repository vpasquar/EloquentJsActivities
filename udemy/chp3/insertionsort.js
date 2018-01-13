

insertionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let current = arr[i]
        let j = i - 1;
        while(j >= 0 && arr[j] >= current) {
        	arr[j + 1] = arr[j];
        	j--;
        }
        arr[j+1] = current
	}
	return arr;
}

const arr = [7,3,5,1];
console.log(insertionSort(arr));

// good for small lists
// good for partially sorted lists