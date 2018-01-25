// function countB(string) {
//    var count = 0
//    for (var i = 0; i < string.length; i++) {
//    	   if(string.charAt(i) === "B") {
//    	   	count++
//    	   }
//    }
//    return count;
// }

// console.log(countB("BBC"));


function countLetter(string,letter) {
   var count = 0
   for (var i = 0; i < string.length; i++) {
   	   if(string.charAt(i) === letter) {
   	   	count++
   	   }
   }
   return count;
}

console.log(countLetter("kakkerlak", "k"));
