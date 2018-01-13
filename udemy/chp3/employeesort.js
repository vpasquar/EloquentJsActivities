const empList = [
 {
 	empNum:112,
 	first:"Vin",
 	last:"Pasquarelli"
 },
 {
 	empNum:104,
 	first:"Dan",
 	last:"Pasquarelli"
 },
 {
 	empNum:108,
 	first:"Tony",
 	last:"Pasquarelli"
 }

]

insertionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let current = arr[i]
        let j = i - 1;
        while(j >= 0 && arr[j].empNum >= current.empNum) {
        	arr[j + 1] = arr[j];
        	j--;
        }
        arr[j+1]= current
	}
	return arr;
}

console.log(insertionSort(empList));