/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let check = false
    const count = new Map();
    for(let i = 0; i < nums.length; i++){
        current = count.get(nums[i])??0;
        count.set(nums[i], current + 1);
        if(count.get(nums[i]) > 1){
            check = true;
        }
    }
    return check
};