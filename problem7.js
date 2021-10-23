/*
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message,
count the number of ways it can be decoded.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/
export default class Problem7 {
  static solve(message) {
    if (message.length <= 1)
      return 1;
    
    let ways = Problem7.solve(message.substring(0, message.length-1));
    if (Number(message[message.length-1]) <= 6)
      ways += Problem7.solve(message.substring(0, message.length-2));
    return ways;
  }

  static tests = [
    () => {
      const message = '111';
      return Problem7.solve(message) === 3;
    },
    () => {
      const message = '1';
      return Problem7.solve(message) === 1;
    },
    () => {
      const message = '26';
      return Problem7.solve(message) == 2;
    },
    () => {
      const message = '27';
      return Problem7.solve(message) == 1;
    }
  ]
}