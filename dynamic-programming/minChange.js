const minChange = (amount, coins, memo={}) => {
    const answer = _minChange(amount, coins);
    if (answer === Infinity) {
        return -1;
    } else {
        return answer;
    }
}
const _minChange = (amount, coins, memo={}) => {
    if(amount in memo) return memo[amount]
    if(amount < 0) return Infinity;
    if(amount === 0) return 0;
    
    let minCoins = Infinity;
    coins.map(coin => {
        const numCoins = 1 + _minChange(amount - coin, coins, memo);
        minCoins = Math.min(minCoins, numCoins)
    })

    memo[amount] = minCoins;
    return minCoins;
}

console.log(minChange(8, [1, 5, 4, 12, 3, 2, ])); // -> 2,