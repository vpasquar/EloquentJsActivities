function printFarmInventory(cows,chickens) {
   var cowString = String(cows);
   while (cowString.length < 3) {
    	cowString = 0 + cowString;
   }
   console.log("num cows: " + cowString);
   var chickString = String(chickens);
   while (chickString.length < 3) {
   	   chickString = 0 + chickString;
   }
   console.log("num chicks: " + chickString);

}

// printFarmInventory(7,17);


function zeroPad(number) {
   var string = String(number);
   while (string.length < 3) {
       string = 0 + string;
   }
     return string;
}

function printInvent(string,label) {  
   console.log("num of " + label + " : " + string);
};

printInvent(zeroPad(7),"cows");



