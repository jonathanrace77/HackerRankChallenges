// This function takes in the date for the returned date of a book in a library (d1, m1, y1).
// It also takes in the due date of the book (d2, m2, y2).

// It calculates and returns the fine.
// If the book is returned the same month but late then the fine is 15 * each day late.
// If the book is later than the month expected then the fine is 500 * each month late.
// If the book is later than the year it was due then there is a fixed fine of 10000.

function libraryFine(d1, m1, y1, d2, m2, y2) {

    let fine = 0;

    let returnDate = new Date(`${m1}/${d1}/${y1}`);
    let dueDate = new Date(`${m2}/${d2}/${y2}`);
    let timeDif = returnDate.getTime() - dueDate.getTime();
    let daysDiff = timeDif / (1000 * 3600 * 24);

    if (daysDiff > 0) {
        fine = daysDiff * 15;

        if (m1 > m2) {
            fine = (m1 - m2) * 500;
        }
    }

    if (y1 > y2) {
        fine = 10000;
    }

    return fine;
}
