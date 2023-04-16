const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
    this.count = 8;
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  pop() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }

  size() {
    return this.count;
  }

  toArray() {
    let arr = [];
    let item = this.top;
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
    return arr;
  }

  findMin() {
    return Math.min(...this.toArray());
  }

  sort() {
    let swapped = true;
    while (swapped) {
      swapped = false;
      let curr = this.top;
      while (curr !== null && curr.next !== null) {
        if (curr.data > curr.next.data) {
          let temp = curr.data;
          curr.data = curr.next.data;
          curr.next.data = temp;
          swapped = true;
        }
        curr = curr.next;
      }
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = -Infinity;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    let node = this.first;
    while (node) {
      if (node.data > this.max) {
        this.max = node.data;
      }
      node = node.next;
    }
    return this.max;
  }

  count() {
    return this.size;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
