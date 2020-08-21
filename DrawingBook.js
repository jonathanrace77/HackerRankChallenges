// Brie’s Drawing teacher asks her class to open their books to a page number. 
// Brie can either start turning pages from the front of the book or from the back of the book. 
// She always turns pages one at a time. When she opens the book, page 1 is always on the right side.

// This function takes the number of pages (n) and a page number (p).
// It returns the number of turns needed to reach the page number from either the start or end (depending on which is shorter).

function pageCount(n, p) {

    let numOfTurns;
    let nIsEvenNumber = n % 2 != 0 ? 0 : 1;
    let pIsEvenNumber = p % 2 != 0 ? 0 : 1;

    if (p > n / 2) {
        if (nIsEvenNumber) {
            numOfTurns = Math.ceil((n - p) / 2);
        } else {
            if (pIsEvenNumber) {
                numOfTurns = Math.floor((n - p) / 2);
            } else {
                numOfTurns = Math.ceil((n - p) / 2);
            }
            if (p === n - 1) {
                numOfTurns = 0;
            }
        }
    } else {
        numOfTurns = Math.floor(p / 2);
    }

    if (n === p || p === 1) {
        numOfTurns = 0;
    }

    return numOfTurns;
}
