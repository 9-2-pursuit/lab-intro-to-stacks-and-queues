// const { nums, words } = require("./data/data.js");
// const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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

  isEmpty() {
    return this.first === null;
  }

  dequeue() {
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }
  peek() {
    return this.first;
  }
  count() {
    return this.size;
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

  getLast() {
    return this.last;
  }
}

class Stack {
  constructor(top = null) {
    this.first = null;
    this.last = null;
    this.top = top;
    this.count = 0;
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
    this.count++;
  }

  pop() {
    this.count--;
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  peek() {
    return this.top;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.top === null;
  }

  //create toArray method for stack to use to find the min and to sort the stack

  toArray() {
    let arr = [];
    let item = this.top;
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
    return arr.sort((a, b) => (a > b ? -1 : 1));
  }

  findMin() {
    return this.toArray().reverse()[0];
  }

  sort() {
    let sortedArr = this.toArray();

    for (let i = 0; i < sortedArr.length; i++) {
      this.push(sortedArr[i]);
    }
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};