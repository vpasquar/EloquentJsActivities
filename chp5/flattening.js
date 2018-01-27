//flatten an array of arrays into a single array using reduce and concat.

const arrays = [[1,2,3],[4,5],[6]];

//reduce function goes through each element in arrays and concatenates them in order.


console.log(arrays.reduce(function(flat,current) {
	return flat.concat(current);
}, []));
//


const flattened = [[0, 1], [2, 3], [4, 5]];

console.log(flattened.reduce((acc, curr) => acc.concat(curr), []));


// example of using reduce to count names in an object.

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce((allNames,name) => {
	if(name in allNames) {
		allNames[name]++;
	} 
	else {
		allNames[name] = 1;
	}
	return allNames;
}, {});

console.log(countedNames);
