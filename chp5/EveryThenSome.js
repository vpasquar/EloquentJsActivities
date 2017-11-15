//instead of using standard every and some methods we write our own custom functions. 
//every - returns true if every element of array meets expectation
//some  - returns true and breaks processing if a single element of array meets expectation

function every(array,predicate) {
   for (var i = 0; i < array.length; i++) {
     if(!predicate(array[i]))
     	 return false;
   }
   return true;
};

function some(array,predicate) {
   for (var i = 0; i < array.length; i++) {
   	 if(predicate(array[i]))
   	 	return true;
   }
   return false;
};

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false