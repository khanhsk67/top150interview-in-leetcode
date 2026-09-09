/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    check = true;
    maxIndex = 0;
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] > nums[maxIndex]){
            maxIndex = i;
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(maxIndex != i){
            if(nums[maxIndex] < nums[i]*2){
                check = false;
                return -1
            }
        }
    }
    return maxIndex
};