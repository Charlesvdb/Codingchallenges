// Lauren has a chart of distinct projected prices for a house over the next several years. She must buy the house in one year and sell it in another, and she must do so at a loss. She wants to minimize her financial loss.
// For example, the house is valued at  over the next  years. She can purchase the home in any year, but she must resell the house at a loss in one of the following years. Her minimum loss would be incurred by purchasing in year  at  and reselling in year  at .
// Find and print the minimum amount of money Lauren must lose if she buys the house and resells it within the next  years.
// Note: It's guaranteed that a valid answer exists.

// Function Description
// Complete the minimumLoss function in the editor below. It should return an integer that represents the minimum loss that can be achieved.
// minimumLoss has the following parameter(s):
// price: an array of integers that represent prices at each year
// Input Format

// The first line contains an integer , the number of years of house data.
// The second line contains  space-separated long integers describing each .

// Constraints
// All the prices are distinct.
// A valid answer exists.
// Subtasks

//  for  of the maximum score.
// Output Format
// Print a single integer denoting the minimum amount of money Lauren must lose if she buys and resells the house within the next  years.


function minimumLoss(prices) {
    const indexes = {};
    let minLoss = Infinity;

    for(let i=0; i<prices.length; i++) {
        indexes[prices[i]] = i;
    }

    console.log(indexes)
    
    const sortedPrices = Object.keys(indexes).sort((a, b) => a - b)

    console.log(sortedPrices)

    for (let i = 0; i < sortedPrices.length - 1; i++) {
        if (indexes[sortedPrices[i]] > indexes[sortedPrices[i + 1]]) {
            minLoss = Math.min(minLoss, prices[indexes[sortedPrices[i + 1]]] - prices[indexes[sortedPrices[i]]]);
        }
    }
    return minLoss;
}