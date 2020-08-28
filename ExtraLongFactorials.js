// This function takes an integer (n) and then returns the factorial. (e.g. 3 = 3 * 2 * 1 = 6).
// bigint is required as this is dealing with very long factorials.

function extraLongFactorials(n) {

let bigint = 1n;

for(let i = 1; i < n; i++){
    bigint *= BigInt(i + 1);
}

return bigint.toString();

}
