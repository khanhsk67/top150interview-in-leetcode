/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    if(s.length < 2) {
        return true
    }
    let s2 = ''
    for(let i = 0; i < s.length; i++){
        s2 = s[i] + s2;
    }

    return (s === s2)
};