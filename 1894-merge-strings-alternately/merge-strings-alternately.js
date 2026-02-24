/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let arr1 = word1.split("");
    let arr2 = word2.split("");
    let mergeArr = [];
    let j = 0;
    let mergeWord = "";
    let sum = word1.length + word2.length;
    let max = Math.max(word1.length, word2.length)
    for(let i = 0; i < max; i++){
        // for(let j = 0; j < sum; j++){
            if(i < word1.length){
                mergeArr[j] = arr1[i]
                j= j+1
            }
            if(i < word2.length){
                mergeArr[j] = arr2[i];
                j = j + 1;
            }
        // }
    }
    mergeWord = mergeArr.join('')
    return mergeWord;
};