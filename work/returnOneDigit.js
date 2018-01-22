//given a non-negative num, add all of its digits until the result has only 1 digit

//given number 38 3+8 = 11 -> 1 + 1 = 2

splitInt = int => {
	var arrString = int.toString().split('');
	var arrNum = [];
	for (var i = 0; i < arrString.length; i++) {
		arrNum.push(parseInt(arrString[i]));
	}

	return arrNum;
}

userExecute = userNum => {
	if (userNum < 10) {
		return userNum;
	}

	return addElements(userNum);
}

addElements = (passedNum) => {
	var num = 0
	var arr = splitInt(passedNum);
    // console.log(arr);
	for (var i = 0; i < arr.length; i++) {
		num += arr[i];
	}

	if (num < 10) {
		return num;
	} else {
		return addElements(num);
	}
}

console.log(userExecute(799));

// 1. Define two helper functions.

//// A. splitInt -   takes number supplied by user and converts it to a string. 
////                 the string is then converted into an array to be supplied to 
////                 addElements functions
//// B. userExecute -simple check if the user supplied number is greater than 9.

// 2. addElements is defined to do the bulk of the work
//    This function takes the supplied num, calls splitInt to convert to an array and 
//    and then iterates over the array to create a new sum. If the sum is greater than 9,
//    addElements is called recursively with the newly created num

 splitInt2 = int => {
 	stringNum = int.toString().split('');
 	newArray = [];
 	for (var i = 0; i < stringNum.length; i++) {
 		newArray.push(stringNum[i]);
 	}

 	return newArray;
 }

 addEle = passedNum => {
 	var num = 0
 	var arr = splitInt2(passedNum);

 	for (var i = 0; i < arr.length; i++) {
 		num += arr[i];
 	}

 	if (num < 10) {
 		return num;
 	} else {
 		addEle(num);
 	}
 }