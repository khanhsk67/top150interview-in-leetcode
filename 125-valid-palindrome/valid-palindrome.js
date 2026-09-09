/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    console.log(s)
    if(s.length < 2) {
        return true
    }
    let s1 = ''
    let s2 = ''
    for(let i = 0; i < s.length; i++){
        s1 = s1 + s[i];
        s2 = s[i] + s2;
    }
    console.log(s1)
    console.log(s2)

    return (s1 === s2)
};