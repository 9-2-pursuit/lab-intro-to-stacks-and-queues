const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top) {
    this.top = top || null;
  }

  push(data) {
    let newItem = new Node(data);
    if (this.top === null) {
      this.top = newItem;
    } else {
      newItem.next = this.top;
      this.top = newItem;
    }
  }

  size() {
    let count = 0;
    let node = this.top;
    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  pop() {
    let popped = this.top;
    this.top = popped.next;
    return popped;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let min = this.top.data;
    let node = this.top;
    while (node) {
      if (node.data < min) {
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }

  sort() {
    // let min = this.findMin();
    // let stackLength = this.size();
    // const tmpStack = new Stack()

    // while (this) {
    //   if (node.data) {}
    // }
  }

}

class Queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = value;
  }

  count() {
    return this.size;
  }

  enqueue(data) {
    let newItem = new Node(data)
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    this.size++;
  }

  dequeue() { 
    let item = this.first;
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  findMax() {
    let node = this.first;
    let max = this.first.data;
    while (node) {
      if (node.data > max) {
        max = node.data;
      }
      node = node.next;
    }
    return max;
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.first;
  }
}

const numStack = new Stack();
console.log(numStack.isEmpty());
for (let i = 0; i < nums.length; i++) {
  numStack.push(nums[i]);
}
console.log(inspect(numStack));
console.log(numStack.isEmpty());

module.exports = {
  Node,
  Queue,
  Stack,
};
