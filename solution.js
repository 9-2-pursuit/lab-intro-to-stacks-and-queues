const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

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
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
  count() {
    return this.size;
  }
  getLast() {
    if (this.last == null) {
      throw new Error("The queue is empty") 
    }
    return this.last
  }

  findMax() {
    if (this.isEmpty()) {
      throw new Error("The queue is empty");
    }
    let max = this.first.data;
    let current = this.first.next;
    while (current) {
      if (current.data > max) {
        max = current.data;
      }
      current = current.next;
    }
    return max;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
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

  size() {
    let count = 0;
    let current = this.top;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  sort() {
    //bubble sort implementation
    let swapped = true;
    while (swapped) {
      swapped = false;
      let current = this.top;
      while (current !== null && current.next !== null) {
        if (current.data > current.next.data) {
          //swap data of current to next node.
          let temp = current.data;
          current.data = current.next.data;
          current.next.data = temp;
          swapped = true;
        }
        current = current.next;
      }
    }
  }

  findMin() {
    this.sort();
    return this.top.data;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
