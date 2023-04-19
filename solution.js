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
    if (this.isEmpty()) {
      return null;
    }
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
    if (this.isEmpty()) {
      return null;
    }
    return this.top;
  }

  size() {
    return this.count;
  }

  sort() {
    this.top = this.mergeSort(this.top);
  }

  mergeSort(head) {
    if (!head || !head.next) {
      return head;
    }
    let mid = this.getMiddle(head);
    let nextToMid = mid.next;
    mid.next = null;
    let left = this.mergeSort(head);
    let right = this.mergeSort(nextToMid);
    return this.merge(left, right);
  }

  merge(left, right) {
    let dummy = new Node(null);
    let tail = dummy;
    while (left && right) {
      if (left.data < right.data) {
        tail.next = left;
        left = left.next;
      } else {
        tail.next = right;
        right = right.next;
      }
      tail = tail.next;
    }
    tail.next = left || right;
    return dummy.next;
  }

  getMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
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
    if (this.isEmpty()) {
      return null;
    }
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
    if (this.isEmpty()) {
      return null;
    }

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
    if (this.isEmpty()) {
      return null;
    }
    return this.last;
  }

  peek() {
    if (this.first === null) {
      return null;
    }

    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
