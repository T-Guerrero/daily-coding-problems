/*
Run-length encoding is a fast and simple method of encoding strings.
The basic idea is to represent repeated successive characters as a single
count and character. For example, the string "AAAABBBCCDAA" would be
encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding.
You can assume the string to be encoded have
no digits and consists solely of alphabetic characters.

You can assume the string to be decoded is valid.
*/
export default class Problem29 {
  static encoding(string) {
    let output = "";
    let counter = 1;

    if(string.length == 0)
      return "";
    
    for(let i  = 1; i < string.length; i++) {
      if(string[i] != string[i - 1]) {
        output += `${counter}${string[i - 1]}`;
        counter = 1;
      }
      else
        counter++;
    }
    output += `${counter}${string[string.length - 1]}`;
    return output;
  }

  static decoding(encoded) {
    let output = "";
    for(let i = 0; i < encoded.length - 1; i+=2) {
      const frequency = encoded[i];
      const letter = encoded[i + 1];

      output += letter.repeat(frequency);
    }

    return output;
  }

  static tests = [
    () => {
      const string = "AAAABBBCCDAA";
      return Problem29.encoding(string) === "4A3B2C1D2A";
    },
    () => {
      const encoded = "4A3B2C1D2A";
      return Problem29.decoding(encoded) === "AAAABBBCCDAA";
    },
    () => {
      const string = "";
      return Problem29.encoding(string) === "";
    },
    () => {
      const encoded = "";
      return Problem29.decoding(encoded) === "";
    }
  ]
}