/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let tmpSum = 0; 
    numberOutput = [];
    for(let i = 0; i < nums.length; i++){
        tmpSum = tmpSum + nums[i];
        numberOutput.push(tmpSum)
    }
    return numberOutput
};