function groupAnagrams(strs) {
    let groupedMap = {};
    for(let i=0; i<strs.length; i++){
        const word = strs[i];
        const key = word.split('').sort().join('')

        if(!groupedMap[key]){
            groupedMap[key] = [];
        }

        groupedMap[key].push(word);
    }

    return Object.values(groupedMap)
    
}

module.exports = groupAnagrams;
