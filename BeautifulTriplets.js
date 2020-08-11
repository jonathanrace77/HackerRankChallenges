// Given a sequence of integers 'a', a triplet (a[i], a[j], a[k]) is beautiful if: i < j < k and the difference between i & j as well as j & k = 'd'.
// This function takes 'd' (the interval) and 'arr' (the array to test).
// It will then return how many beautiful triplets there are.

function beautifulTriplets(d, arr) {
    let count = 0;
    let timesTwo;
    let timesThree;

    for (let i = 0; i < arr.length; i++) {
        timesTwo = 0;
        timesThree = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] === arr[i] + d) {
                timesTwo = 1;
            }
            if (arr[j] === arr[i] + d * 2 && timesTwo === 1) {
                timesThree = 1;
            }
        }
        if (timesTwo === 1 && timesThree === 1) {
            count++
        }
    }

    return count;

}
