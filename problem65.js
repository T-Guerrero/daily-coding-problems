import { equals } from './utils.js';
/*
Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
For example, given the following matrix:

[[1,  2,  3,  4,  5],
 [6,  7,  8,  9,  10],
 [11, 12, 13, 14, 15],
 [16, 17, 18, 19, 20]]
You should print out the following:

1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12
*/
export default class Problem65 {
	static moves = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];
	static solve(matrix) {
		const result = [];

		if (matrix.length == 0) return [];

		this.recursiveSolve(
			result,
			matrix,
			[0, 0],
			[matrix.length - 1, matrix[0].length - 1]
		);
		return result;
	}

	static recursiveSolve(result, matrix, startPoint, endPoint) {
		if (!this.isSmallerOrEqual(startPoint, endPoint)) return;

		let [currentx, currenty] = startPoint;
		result.push(matrix[currentx][currenty]);
		for (let move of this.moves) {
			const [i, j] = move;
			while (
				currentx + i >= startPoint[0] &&
				currentx + i <= endPoint[0] &&
				currenty + j >= startPoint[1] &&
				currenty + j <= endPoint[1]
			) {
				currentx += i;
				currenty += j;
				console.log(currentx, currenty);
				result.push(matrix[currentx][currenty]);
			}
		}

		//Remove startPoint duplicated
		result.pop();
		this.recursiveSolve(
			result,
			matrix,
			[startPoint[0] + 1, startPoint[1] + 1],
			[endPoint[0] - 1, endPoint[1] - 1]
		);
	}

	static isSmallerOrEqual(pos1, pos2) {
		if (pos1[0] <= pos2[0] && pos1[1] <= pos2[1]) return true;
		if (pos1[0] == pos2[0] && pos1[1] <= pos2[1]) return true;
		if (pos1[1] == pos2[1] && pos1[0] <= pos2[0]) return true;
		return false;
	}

	static tests = [
		() => {
			const matrix = [
				[1, 2, 3, 4, 5],
				[6, 7, 8, 9, 10],
				[11, 12, 13, 14, 15],
				[16, 17, 18, 19, 20],
			];
			const result = [
				1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12,
			];
			return equals(this.solve(matrix), result);
		},
		() => {
			const matrix = [
				[1, 2, 3, 4],
				[6, 7, 8, 9],
				[11, 12, 13, 14],
				[16, 17, 18, 19],
			];
			const result = [1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 11, 6, 7, 8, 13, 12];
			return equals(this.solve(matrix), result);
		},
		() => {
			const matrix = [
				[1, 2, 3],
				[6, 7, 8],
				[11, 12, 13],
				[16, 17, 18],
			];
			const result = [1, 2, 3, 8, 13, 18, 17, 16, 11, 6, 7, 12];
			return equals(this.solve(matrix), result);
		},
		() => {
			const matrix = [];

			return equals(this.solve(matrix), []);
		},
	];
}
