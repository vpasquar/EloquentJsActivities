// F(n) = F(n- 1) + F(n-2)

// the following function takes 3 arguments, 2 starting numbers, and the length of the fibonacci sequence,
//
createFibonacci = (a,b,length) => {
   var maxLength = 20
   var currLength = 0
   var nextNum = 0
   var sequence = [a,b]
   while (currLength < maxLength) {
     nextNum = a + b
     a = b
     b = nextNum
     sequence.push(nextNum);
     currLength++

   }
   return sequence;
}

// console.log(createFibonacci(1,1,10));


// now provided n from F(n) how can we get the Fib[n].

fib = n => {
	var fibo = [0,1]

	for (i = 2; i <= n; i++) {
		fibo[i] = fibo[i -1] + fibo[i - 2];
	}
    return fibo[n];
}

fibRecursive = n => {
	if (n <= 1) {
		return n;
	} else
	    return fibRecursive(n-1) + fibRecursive(n-2);
}

console.log(fib(14));
console.log(fibRecursive(14));


fib = n => {
	var fibo = [0,1];

	for (var i = 2; i <= n; i++) {
		fibo[i] = fibo[i-1] + fibo[i - 2];
	}

	return fibo[2];
}

