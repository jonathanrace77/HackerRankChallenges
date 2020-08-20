// You have been asked to help study the population of birds migrating across the continent. 
// Each type of bird you are interested in will be identified by an integer value.
// Each time a particular kind of bird is spotted, its id number will be added to your array of sightings.

// This function takes in an the array of sighting (arr)
// It will calculate which "type of bird" is the most common and has the lowest number (if it is a tie). e.g (1,3,3,3,4,4,4,5) would output 3.


function migratoryBirds(arr) {

    arr.sort(function (a, b) { return a - b });

    let count = 1;
    let highestID = [arr[arr.length - 1], 1];

    for (let i = arr.length - 2; i >= 0; i--) {

        if (arr[i] === arr[i + 1]) {
            count++
            if (count >= highestID[1]) {
                highestID[0] = arr[i];
                highestID[1] = count;
            }
        } else {
            count = 1;
        }

    }

    return highestID[0];

}
