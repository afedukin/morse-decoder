const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";

  for (let i = 0; i < expr.length; i += 10) {
    let a = expr.slice(i, i + 10);
    if (a === "**********") {
      result += " ";
    } else {
      let decodeKey = "";
      for (let j = 0; j < 10; j += 2) {
        let b = a.slice(j, j + 2);
        if (b === "10") {
          decodeKey += ".";
        } else if (b === "11") {
          decodeKey += "-";
        } else {
            decodeKey += "";
        }
      }
      result += MORSE_TABLE[decodeKey];
    }
  }

  return result;
}

module.exports = {
  decode,
};
