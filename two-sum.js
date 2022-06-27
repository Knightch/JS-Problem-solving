var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length;i++){
        console.log(nums[i]);
        for(let j = 1; j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                console.log(nums[j])
                console.log([i,j])
                return [i,j]
            }
        }
    }
};

var nums = [2,7,11,15];
var target = 13;

twoSum(nums,target);