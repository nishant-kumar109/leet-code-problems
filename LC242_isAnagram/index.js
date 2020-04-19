function isAnagram(s, t) {
    if(s.length != t.length){
        return false;
    }

    const sCharCount = {};
    // { h:1, e:1, l:2, o:1 }
    // fill charCounts

    for(let i=0; i<s.length; i++){
        const sChar = s[i];
        sCharCount[sChar] = sCharCount[sChar]+1 || 1;
    }

    for(let i=0; i<t.length; i++){
        const tChar = t[i];
        if(!sCharCount[tChar]){
            return false;
        }else{
            sCharCount[tChar]--;
        }
    }

    return true;
}

module.exports = isAnagram;
