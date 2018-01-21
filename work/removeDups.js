var array = [1,1,1,1,7,4,3,6,4,4,4];

uniqueArr = arr => {
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		if (newArr.indexOf(arr[i]) === -1 && arr[i] !== '') {
            newArr.push(arr[i]);
        }
	}

	return newArr
};


console.log(uniqueArr(array));


