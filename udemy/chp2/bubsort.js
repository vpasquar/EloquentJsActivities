const arr = [3,10,4,13,1]
 
console.log(arr); 


bubSort1 = arr => {
	for (let x = 0; x < arr.length - 2; x++) {
	  

	    for (let j = arr.length - 1; j > 0; j--) {

	   	    if (arr[j] < arr[j-1]) {
	   	    	let tmp = arr[j]
	   	    	arr[j] = arr[j-1]
	   	    	arr[j-1] = tmp
	   	    }
	    }
	}
	return arr;
}

bubSort2 = arr => {
	for (let x = 0; x < arr.length-1; x++) {
		for(let j = 0; j < arr.length - 1 - x; j++){
			if (arr[j] > arr[j+1]) {
				let tmp = arr[j+1]
				arr[j+1] = arr[j]
				arr[j] = tmp
			}
		}
	}
	return arr;
}
console.log(bubSort1(arr));


const arr2 = [14,12,7,3,10]
console.log(bubSort2(arr2))


//this sort is a shithole