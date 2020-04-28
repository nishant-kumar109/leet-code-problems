var maxProfit = function(prices) {
    let maxProfit = 0;
    cheapestPrice = prices[0];

    for(let i=0; i<prices.length; i++){

        let price = prices[i]
        if(price<cheapestPrice) cheapestPrice = price;

        const currentProfit = price - cheapestPrice;
        maxProfit = Math.max(currentProfit, maxProfit);
    }

    return maxProfit;
};

// Time compexity = O(N)  we iterate through input array just once;
// Space complexity = O(1)

module.exports = maxProfit;
