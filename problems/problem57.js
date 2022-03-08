import { equals } from './utils.js';
/*
[Medium]
This problem was asked by Amazon.

Given a string s and an integer k, break up the string
into multiple lines such that each line has a length of k or less.
You must break it up so that words don't break across lines.
Each line has to have the maximum possible amount of words.
If there's no way to break the text up, then return null.

You can assume that there are no spaces at the ends of the string
and that there is exactly one space between each word.

For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10,
you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"].
No string in the list has a length of more than 10.
*/
export default class Problem57 {
	static solve(text, k) {
		const words = text.split(' ');
		const output = [];
		let currentLine = '';
		for (let word of words) {
			if (word.length > k) return null;

			if (currentLine.length == 0) currentLine = word;
			else if (currentLine.length + word.length + 1 <= k)
				currentLine += ' ' + word;
			else {
				output.push(currentLine);
				currentLine = word;
			}
		}
		output.push(currentLine);
		return output;
	}

	static tests = [
		() => {
			const text = 'the quick brown fox jumps over the lazy dog';
			const k = 10;
			const solution = [
				'the quick',
				'brown fox',
				'jumps over',
				'the lazy',
				'dog',
			];
			return equals(Problem57.solve(text, k), solution);
		},
		() => {
			const text = "you only know you've been high when you're feeling low";
			const k = 6;
			return Problem57.solve(text, k) == null;
		},
		() => {
			const text = "you only know you've been high when you're feeling low";
			const k = 9;
			const solution = [
				'you only',
				'know',
				"you've",
				'been high',
				'when',
				"you're",
				'feeling',
				'low',
			];
			return equals(Problem57.solve(text, k), solution);
		},
		() => {
			const text = '';
			const k = 1;
			const solution = [''];
			return equals(Problem57.solve(text, k), solution);
		},
		() => {
			const text = 'thequickbrownfoxjumps overthelazydog';
			const k = 10;
			return Problem57.solve(text, k) == null;
		},
		() => {
			const text = 'a, b, c, d';
			const k = 0;
			return Problem57.solve(text, k) == null;
		},
	];
}
