/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
   const s = paragraph.toLowerCase().match(/[a-z]+/g) ?? [];
    // checkword = banned.toLowerCase();

    const count = new Map();
    for(let i = 0; i < s.length; i++){
       if(!banned.includes(s[i])){
            const current = count.get(s[i]) ?? 0;
            count.set(s[i], current + 1)
       } 
    }
    let wordRes = ''
    let maxTmp = 0; 
    for(const [word, current] of count){
        if(maxTmp <= current){
            maxTmp = current;
            wordRes = word;
        }
    }
    return wordRes
};