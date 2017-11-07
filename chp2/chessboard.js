var string ='';
var size = 8;

for (x = 0; x < size; x++) {
	for (var y = 0; y < size; y++) {
	   if ((x + y) % 2 == 0) {
	   	string += " ";
	   } else {
	   	string += "#";
	   }
	}
	string += "\n";
};

console.log(string);