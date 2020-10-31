function countWords(inputWords) {
    return inputWords.reduce(function(countMap, word) {
        if(typeof countMap[word] == "undefined") {
            countMap[word] = 1;
        } else {
            countMap[word] = ++countMap[word];
        }
        return countMap;
    }, {})
    
}

module.exports = countWords