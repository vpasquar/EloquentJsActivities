var nums = [2, 11, 7, 15]; 
var target = 9

findIndices = (nums,target) => {
  solved = [];
  for (let i = 0; i < nums.length; i++) {
  	 let outerNum = nums[i]
     for (let j = i + 1; j < nums.length; j++) {
     	if(outerNum + nums[j] === target) {
     		return [i, j];
     	}
     }
  }

}

console.log(findIndices(nums,target));