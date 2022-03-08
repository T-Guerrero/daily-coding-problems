/*
An sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time.
If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.
*/
export default class Problem58 {
	static solve(list, element) {
		let start = this.searchRotationPoint(list);
		let half = Math.ceil(list.length / 2);
		console.log(start);
		while (half > 0) {
			const mid = (start + half) % list.length;
			if (list[mid] == element) return mid;

			if (list[mid] < element) start = (start + half + 1) % list.length;

			half /= 2;
		}

		return null;
	}

	static searchRotationPoint(list) {
		let left = 0;
		let right = list.length;

		while (left <= right) {
			const mid = Math.floor((right - left) / 2);
			if (list[mid] < list[mid - 1]) return mid;
			if (list[mid] < list[left]) right = mid;
			else left = mid + 1;
		}
	}

	static tests = [
		() => {
			const list = [13, 18, 25, 2, 8, 10];
			const element = 8;
			return this.solve(list, element) === 4;
		},
		() => {
			const list = [13, 18, 25, 2, 8, 10, 11];
			const element = 5;
			return this.solve(list, element) == null;
		},
		() => {
			const list = [];
			const element = 5;
			return this.solve(list, element) == null;
		},
	];
}
