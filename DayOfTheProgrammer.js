// The day of the programmer is on the 256th day of the year in Russia.
// The purpose of this function is to take in a year as an argument and return the date that the day of the programmer falls on.
// It needs to calculate both the leap years for the Gregorian calendar as well as the Julian calendar (as Russia switched to the Gregorian in 1918).

function dayOfProgrammer(year) {

    let isLeapYear = 0;

    if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0 || year <= 1917 && year % 4 === 0) {
        isLeapYear = 1
    }

    if (year === 1918) {
        return "26.09.1918";
    }

    if (isLeapYear) {
        return "12.09.".concat(year);
    } else {
        return "13.09.".concat(year);
    }

}
