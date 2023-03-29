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
    this.size = null;
    this.max = null;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
