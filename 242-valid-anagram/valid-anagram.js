/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    // else{
    //     let arr1 = s.split('')
    //     arr1.sort();
    //     let arr2 = t.split('')
    //     arr2.sort();
    //     for(let i = 0; i < s.length; i++){
    //         if(arr1[i] != arr2[i]){
    //             return false;
    //         }
    //     }
    //     return true;
    // }

  const counts1 = new Map();
    for(let i = 0; i < s.length; i++){
        current = counts1.get(s[i]) ?? 0;
        counts1.set(s[i], current + 1)
    }
  const counts2 = new Map();
  for(let i = 0; i < t.length; i++){
    current = counts2.get(t[i]) ?? 0;
    counts2.set(t[i], current + 1)
  }
  for(let [char,count] of counts1){
    if(counts2.get(char) !== count){
        return false
    }

  }
    return true
};