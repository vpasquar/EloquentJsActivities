swapNum = (a,b) => {
   console.log(`before swap a:${a} b:${b}`);
   b = b - a
   a = a + b
   b = a - b
   console.log(`after swap a:${a}  b:${b}`);
}

swapNum(2,3);
swapNum(3,2);