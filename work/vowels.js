var string = "aaerlksndknalsladoeacmu"

var arr = string.split("");



var vowel_list = "aeiou"

vowelGroup = arr => {
   var group = []
   for (var i = 0; i < arr.length; i++) {
   	  if (vowel_list.indexOf(arr[i]) !== -1) {
   	  	group.push(arr[i]);
   	  }
   }
   return group;
}

groupByVowel = arr => {
	var aGrp = []
	var eGrp = []
	var iGrp = []
	var oGrp = []
	var uGrp = []

	for (var x = 0; x < arr.length; x++) {
		if (arr[x] === "a") {
         aGrp.push(arr[x]);
		} else if (arr[x] === "e") {
          eGrp.push(arr[x]);
		} else if (arr[x] === "i") {
          iGrp.push(arr[x]);
		} else if (arr[x] === "o") {
          oGrp.push(arr[x]);
		} else if (arr[x] === "u") {
          uGrp.push(arr[x]);
		} 
	}
	return eGrp; //return whichever group needed. 
}

console.log(vowelGroup(arr));
console.log(groupByVowel(vowelGroup(arr)));


