// An English text needs to be encrypted using the following encryption scheme.
// First, the spaces are removed from the text. Let L be the length of this text.
// Then, characters are written into a grid, whose rows and columns have the following constraints:
// floor(√L) <= row <= column <= ceil(√L)

// This function takes in a string (s).
// It then does its calculations and returns the "encrypted" string.

function encryption(s) {

    s = s.replace(/\s+/g, '');

    let sLengthWithSpaces = s.length;
    let newString = [];

    let row = Math.floor(Math.sqrt(s.length));
    let col = Math.floor(Math.sqrt(s.length));

    if (row * col < s.length) {
        row++;
    }

    if (row * col < s.length) {
        col++;
    }

    for (let j = 0; j < row; j++) {
        for (let i = j; i < sLengthWithSpaces; i += row) {
            newString.push(s[i]);
        }
        if (newString.length >= sLengthWithSpaces) break;
        newString.push(' ');
        sLengthWithSpaces++;
    }

    return newString.join("");

}
