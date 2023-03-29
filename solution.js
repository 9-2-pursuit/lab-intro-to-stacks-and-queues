const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.min = -Infinity;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }
  push(data) {
    const node = new Node(data);
    if (this.top) {
      node.next = this.top;
    }
    this.top = node;
    this.count++;
  }
  pop() {
    if (!this.top) return null;
    let copy = this.top;
    this.top = this.top.next;
    this.count--;
    return copy;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    console.log(this.top);
    return this.top;
  }

  findMin() {
    let cur = this.top;
    let min = Infinity;
    while (cur) {
      if (cur.data < min) {
        min = cur.data;
      }
      cur = cur.next;
    }
    return min;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  count() {
    return this.size;
  }
  enqueue(data) {
    const node = new Node(data);
    if (!this.first) {
      this.first = node;
    }
    if (!this.last) {
      this.last = node;
    } else if (this.last) {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }
  dequeue() {
    const copy = this.first;
    this.first = this.first.next;
    this.size--;
    return copy.data;
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

module.exports = {
  Node,
  Queue,
  Stack,
};
