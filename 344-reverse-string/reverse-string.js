/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let rightPoint = s.length -1;
    let leftPoint = 0;
    let tmp = ''
    for(let i = 0; i < s.length/2; i++){
        tmp = s[leftPoint + i];
        s[leftPoint + i] = s[rightPoint - i]
        s[rightPoint - i] = tmp;
    }
    return s
};