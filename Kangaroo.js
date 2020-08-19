// You are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
// This function takes in the starting point of the kangaroos (x1, x2) and the distance per jump (v1, v2).
// It calculates if the kangaroos will land on the same spot on the same jump number -> "YES" if not then it will return "NO"

function kangaroo(x1, v1, x2, v2) {

    let smallestNumber = x1 < x2 ? x1 : x2;
    let largestNumber = x2 > x1 ? x2 : x1;
    let smallestJump = x1 < x2 ? v1 : v2;
    let largestJump = x2 > x1 ? v2 : v1;

    let maxNumOfJumpsToTest = 20000;

    for (let j = 0; j < maxNumOfJumpsToTest; j++) {

        smallestNumber += smallestJump;
        largestNumber += largestJump;

        if (smallestNumber === largestNumber) {
            return 'YES';
        }

        if (largestJump > smallestJump || smallestNumber > largestNumber || v1 === v2) {
            return 'NO';
        }
    }

    return 'NO';

}
