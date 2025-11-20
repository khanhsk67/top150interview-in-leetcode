/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for(let key in obj){
        console.log(key)
        if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
};