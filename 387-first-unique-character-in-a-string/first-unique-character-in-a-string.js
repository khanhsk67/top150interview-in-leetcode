/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = new Map();
    for(let i = 0; i < s.length; i++){
       const index = count.get(s[i]) ?? [];
        index.push(i);
        count.set(s[i], index);
    }

    for(let i = 0; i < s.length ; i ++){
        if(count.get(s[i]).length == 1){
            return count.get(s[i])[0];
        }
    }
    return -1
};