// Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests. 
// Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory.
// Each contest has an amount of luck. If she wins the contest then she "spends" luck and it decreases. If she loses that contest then she gains luck instead.

// She can lose no more than k number of important contests.
// This function takes k and the contests (which have a 1 next to them if they are "important" or a 0 if not) as inputs.
// It then returns the total amount of luck she can gain from these contests.

function luckBalance(k, contests) {

    let importantArray = [];
    let count = 0;
    let kCount = 0;

    for (let i = 0; i < contests.length; i++) {
        console.log(contests[i]);
        if (contests[i][1] === 1) {
            importantArray.push(contests[i][0]);
        } else {
            count += contests[i][0];
        }
    }

    importantArray.sort(function (a, b) { return b - a });

    for (let j = 0; j < importantArray.length; j++) {
        if (kCount != k) {
            count += importantArray[j];
            kCount++;
        } else {
            count -= importantArray[j];
        }
    }
    return count;
}
