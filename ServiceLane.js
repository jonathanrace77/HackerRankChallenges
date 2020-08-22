// Width is an array of lengths for a service lane at intervals.
// Cases provides a start and stop point to check the length of a section of the service lane.
// This function returns the length of a car that can go into this service lane.

// e.g if width is [1,2,4,5] and the cases checked is [2,3] then the result is 4 (out of 4 and 5, 4 is the lowest number).

function serviceLane(nt, width, cases) {
    let lowestNumber;
    for (let j = 0; j < cases.length; j++) {
        lowestNumber = -1;
        for (let i = cases[j][0]; i <= cases[j][1]; i++) {
            if (lowestNumber === -1) {
                lowestNumber = width[i];
            }
            if (width[i] < lowestNumber) {
                lowestNumber = width[i];
            }
        }
        cases[j] = lowestNumber;
    }

    return cases;

}
