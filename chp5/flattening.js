//flatten an array of arrays into a single array using reduce and concat.

const arrays = [[1,2,3],[4,5],[6]];

console.log(arrays.reduce(function(a,b) {
	return a.concat(b);
}));