function timeInWords(h, m) {
  let timeString;

  let wArray = [
    " o' clock",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "minute",
    "quarter ",
    "half ",
    "quarter ",
    "past ",
    "to "
  ];

  // oclock
  if (m === 0) {
    return wArray[h].concat(wArray[0]);
  }

  // quarter past
  if (m === 15) {
    return wArray[22].concat(wArray[25] + wArray[h]);
  }

  if (m === 30) {
    return wArray[23].concat(wArray[25] + wArray[h]);
  }

  if (m === 45) {
    return wArray[22].concat(wArray[26] + wArray[h + 1]);
  }

  if (m === 1) {
    return wArray[1].concat(" " + wArray[21] + " " + wArray[25] + wArray[h]);
  }

  if (m < 30) {
    
    if (m > 20) {
      let newMin = m.toString();
    return wArray[20].concat(" " + wArray[newMin[1]] + " " + wArray[21] + "s " + wArray[25] + wArray[h]);
  }
    
    return wArray[m].concat(" " + wArray[21] + "s " + wArray[25] + wArray[h]);
  }

  if (m > 30) {
    let newNum = 60 - m;
    
    if (newNum > 20) {
      let newMin = m.toString();
    return wArray[20].concat(" " + wArray[newMin[1]] + " " + wArray[21] + "s " + wArray[26] + wArray[h + 1]);
  }

    return wArray[newNum].concat(
      " " + wArray[21] + "s " + wArray[26] + wArray[h + 1]
    );
  }

  return h;
}
