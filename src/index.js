module.exports = function toReadable (number) {
  let units = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  if (number === 0) {
      return "zero";
  }
  let newStr = "";
  for (let i = 1; i < 10; i++) {
    if (Math.floor(number / 100) === i) {
      newStr = newStr + units[(i - 1)] + " hundred";
      break;
    }
    continue;
  }
  if (number % 100 >= 10 && number % 100 <= 19) {
    for (let i = 0; i < 10; i++) {
      if (number % 10 == i) {
        newStr = newStr + " " + teens[i];
        return newStr;
      }
      continue;
    }
  }
  if (number % 100 >=20) {
    for (let i = 2; i < 10; i++) {
      if (Math.floor((number % 100) / 10) == i) {
        newStr = newStr + " " + tens[(i - 2)];
        break;
      }
      continue;
    }
  }
  if (number % 100 < 10 || number % 100 > 19) {
    for (let i = 0; i < 10; i++) {
      if (number % 10 == i) {
        newStr = newStr + " " + units[(i - 1)];
        return newStr;
      }
    }
    continue;
  }
}
