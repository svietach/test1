function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

function memoize(fn) {
    let cash = [];
    return (a) => {
        if (cash[a]) {
            console.log('Fetching from cache without calculation, yeah!');
            return cash[a];
        } else {
            console.log('Calculating result, wait a sec!');
            return cash[a] = fn(a);
        }
    };
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(20)); /* Output: Calculating result, wait a sec!
                                       Output: 2432902008176640000
                                    */

console.log(memoizedFactorial(20)); /* Output: Fetching from cache without calculation, yeah!
                                       Output: 2432902008176640000
                                    */
console.log(memoizedFactorial(20)); /* Output: Fetching from cache without calculation, yeah!
                                       Output: 2432902008176640000
                                    */
console.log(memoizedFactorial(20)); /* Output: Fetching from cache without calculation, yeah!
                                       Output: 2432902008176640000
                                    */
console.log(memoizedFactorial(3)); /* Output: Fetching from cache without calculation, yeah!
                                       Output: 2432902008176640000
                                    */
