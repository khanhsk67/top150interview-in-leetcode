/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    largest = -1;
    second_largest = -1;
    for(let i = 0; i < s.length; i++){
        if(s[i] >= 0 && s[i] <= 9){
            const digit = Number(s[i]);
            if(digit > largest){
                second_largest = largest;
                largest = digit;
            }
                if(digit < largest && digit > second_largest){
                    second_largest = digit
                }
        }
    }
    return second_largest
};