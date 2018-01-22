reverseString = str => {
   var rtnStr = '';

   for (var i = str.length-1; i >= 0; i--) {
   	  rtnStr += str[i];

   }

   return rtnStr;

} 

reverseString2 = str => {
	var rtnStr =[];
	if (!str || typeof str != 'string' || str.length < 2) return str;

	for (var i = str.length - 1; i >=0; i--) {
		rtnStr.push(str[i]);
	}

	return rtnStr.join('');
}

// console.log(reverseString2("Hoobada"))

var str = "Hoobada Doobada"
var test = (str.substring(1) + str.charAt(0));
console.log(test);
console.log(str);

//recursive version of reversing a string
reverseRec = str => {
	var i;
	while (i < str.length) {
		i++
		return reverse(str.substr(1) + str.charAt(0));
	}
} 

// console.log(reverseRec(str));
hahahaha = () => {
   for (var x = 0; x < Infinity; x++) {
      	console.log(x)
   }
};

hahahaha();   