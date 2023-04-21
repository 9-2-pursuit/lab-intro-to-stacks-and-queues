const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.count++;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const poppedNode = this.top;
    this.top = poppedNode.next;
    this.count--;
    return poppedNode;
  }

  isEmpty() {
    return this.count === 0;
  }

  findMin() {
    let current = this.top;
    let min = current.data;
    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }

  peek() {
    return this.top;
  }

  size() {
    return this.count;
  }

  sort() {
    let array = [new Node(this.top.data)];
    let curr = this.top;
    for (let i = 0; i <= this.size() - 1; i++) {
      curr = curr?.next;
      array.push(curr);
    }
    array = array.map((el) => el?.data);
    array = array.sort();

    for (let i = array.length; i >= 0; i--) {
      this.pop();
      if (!!array[i]) {
        this.push(array[i]);
        console.log(this);
      }
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxValue = null;
  }

  count() {
    return this.size;
  }

  enqueue(data) {
    let newNode = new Node(data);

    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
  }

  dequeue() {
    const data = this.first.data;
    this.first = this.first.next;
    this.size--;
    if (this.isEmpty()) {
      this.last = null;
    }
    if (data === this.maxValue) {
      this.maxValue = null;
      let current = this.first;
      while (current) {
        if (current.data > this.maxValue) {
          this.maxValue = current.data;
        }
        current = current.next;
      }
    }
    return data;
  }

  isEmpty() {
    return this.size === 0;
  }

  findMax() {
    let currentNode = this.first;
    let max = currentNode.data;

    while (currentNode !== null) {
      if (currentNode.data > max) {
        max = currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return max;
  }

  getLast() {
    return this.last;
  }

  peek() {
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
