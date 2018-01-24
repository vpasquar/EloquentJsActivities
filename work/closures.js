function makeFunc() {
	var name = "Mozilla";
	console.log("not in closure yet")
	function displayName() {
		console.log(name);
	}

	return displayName;
}

// var myFunc = makeFunc();
// myFunc();
// makeFunc();

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// console.log(add10(2)); // 12

var counter = (function() {
	var privateCounter = 0;
    function changeBy(val) {
    	privateCounter += val;
    }
    return {
     	increment: function() {
     		changeBy(1);
     	},
     	decrement: function() {
     		changeBy(-1);
     	},
     	value: function() {
     		return privateCounter;
     	}
    }
})();


console.log(counter.value());
counter.increment();
console.log(counter.value());


