/*
[Easy]
This problem was asked by Amazon.

Implement a stack that has the following methods:

push(val), which pushes an element onto the stack

pop(), which pops off and returns the topmost element of the stack.
If there are no elements in the stack, then it should throw an error or return null.

max(), which returns the maximum value in the stack currently.
If there are no elements in the stack, then it should throw an error or return null.

Each method should run in constant time.
*/
class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}
export default class Problem43 {
	constructor() {
		this.stack = null;
		this.maxStack = null;
	}

	push(val) {
		const node = new Node(val);

		if (this.maxStack == null || this.maxStack.value <= val) {
			const maxNode = new Node(val);
			maxNode.next = this.maxStack;
			this.maxStack = maxNode;
		}

		node.next = this.stack;
		this.stack = node;
	}

	pop() {
		if (this.stack == null) return null;

		if (this.stack.value == this.maxStack.value)
			this.maxStack = this.maxStack.next;

		const element = this.stack.value;
		this.stack = this.stack.next;
		return element;
	}

	max() {
		if (this.stack == null) return null;

		return this.maxStack.value;
	}

	static tests = [
		() => {
			const solver = new Problem43();
			const list = [90, 20, 10, -70];
			for (let el of list) solver.push(el);
			return solver.max() === 90;
		},
		() => {
			const solver = new Problem43();
			const list = [90, 20, 10, 100];
			for (let el of list) solver.push(el);
			solver.pop();
			return solver.max() === 90;
		},
		() => {
			const solver = new Problem43();
			return solver.pop() == null && solver.max() == null;
		},
		() => {
			const solver = new Problem43();
			const list = [-90, -20, -10, -100];
			for (let el of list) solver.push(el);
			return solver.max() === -10;
		},
	];
}
