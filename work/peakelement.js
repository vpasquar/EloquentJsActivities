// given an array where num[i] != num[i+1], find a peak element and return its index

// a peak element is a number that is great than its neighbors
// (num[i] > num[i-1] && num[i+1])

// if the array is sorted, we could just take the last elmement of the array
array = [1,2,3,1];

findPeak = arr => {
	for (i = 1; i < arr.length - 1; i++) {
		if((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])) {
			return arr[i];
		}
	}
}

//findPeak ^ is inefficient, we do not need to check arr[i-1] because that will
// be checked in the previous iteration of the loop.
findPeak2 = arr => {
	for(i = 0; i < arr.length-1; i++) {
		if(arr[i] > arr[i+1]) {
			return i;
		}
	}
}

console.log(findPeak2(array)); 


findPeakPrac = arr => {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < arr[i + 1]) {
			return i, arr[i];
		}
	}
}