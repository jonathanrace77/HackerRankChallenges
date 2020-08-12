// This function takes in an array of integers. 
// All of the integers except one occur twice.
// This function will find and return that integer.

function lonelyinteger(a) {

    a.sort(function (a, b) {
        return a - b;
    });

    for (let h = 0; h < a.length; h++) {
        if (a[h] === a[h + 1]) {
            a.splice(h, 2);
            h--;
        }
    }

    return a;
}
