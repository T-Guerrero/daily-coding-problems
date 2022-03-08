/*
Given the root to a binary tree, implement serialize(root), which serializes the tree
into a string, and deserialize(s), which deserializes the string back into the tree.
*/
class Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

export default class Problem3 {
	static serialize(root) {
		return Problem3.recursiveSerialize(root, '');
	}

	static recursiveSerialize(node, s) {
		if (node === null) return s;
		s += `${node.value}$`;
		if (node.left !== null) s = Problem3.recursiveSerialize(node.left, s);
		else s += '*';

		if (node.right !== null) s = Problem3.recursiveSerialize(node.right, s);
		else s += '*';
		return s;
	}

	static deserialize(s) {
		const index = { value: 0 };
		return Problem3.recursiveDeserialize(s, index);
	}

	static recursiveDeserialize(s, index) {
		if (index.value >= s.length) return null;
		if (s[index.value] === '*') {
			index.value++;
			return null;
		}
		const posEndChar = s.indexOf('$', index.value);
		const value = s.substring(index.value, posEndChar);
		index.value = posEndChar + 1;
		return new Node(
			value,
			Problem3.recursiveDeserialize(s, index),
			Problem3.recursiveDeserialize(s, index)
		);
	}

	static tests = [
		() => {
			const root = new Node(
				'root',
				new Node('left', new Node('left.left')),
				new Node('right')
			);
			return (
				Problem3.deserialize(Problem3.serialize(root)).left.left.value ===
				'left.left'
			);
		},
		() => {
			const root = null;
			return Problem3.deserialize(Problem3.serialize(root)) === null;
		},
	];
}
