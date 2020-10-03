module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    } else {
        let arr = [...str]; 
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                let openBracket = bracketsConfig[j][0];
                let closeBracket = bracketsConfig[j][1];
                if (arr[i] === openBracket && arr[i + 1] === closeBracket) {
                    arr.splice(i, 2);
                    i = -1;
                } else {
                    continue;
                }                
            }            
        }  
        if (arr.length === 0) {
            return true;
        } else {
            return false;
        }      
    }
}
