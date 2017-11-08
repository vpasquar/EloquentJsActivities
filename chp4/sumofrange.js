
// function that takes start and end and step arguments and produces array


function range(start,end,step) {
	
	if (step == null) {
	    step = 1
	}

	var arr = [];
	for (var x = start; x <= end; x += step) {
        arr.push(x);
	}
	return arr;
} 

console.log(range(1,20,3));

// function that takes array and adds them

function sum(arr) {
	total = 0;
	for (var y = 0; y < arr.length; y ++) {
		total += arr[y];
	}
	return total;
}

console.log(sum(range(1,10)));
// lol