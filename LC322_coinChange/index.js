function coinChange(coins, amount) {
    let dpMinCoins = new Array(amount+1).fill(Infinity);
    dpMinCoins[0] = 0;

    for(let i=1; i<dpMinCoins.length; i++){
        for(let j=0; j<coins.length; j++){
            const coinsValue = coins[j];
            if(coinsValue<=i){
                dpMinCoins[i] = Math.min(dpMinCoins[i-coinsValue]+1, dpMinCoins[i]);
            }
        }
    }

    const answer = dpMinCoins[dpMinCoins.length-1];
    return answer===Infinity ? -1 : answer;
}

module.exports = coinChange;

// time complexity = O(A*C) where A is amount and C is number of coins
// space complexity = O(A)   we dp array of lrngth A

