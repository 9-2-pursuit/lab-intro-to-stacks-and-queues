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
  findMax() {
    let cur = this.top;
    let max = -Infinity;
    while (cur) {
      if (cur.data > max) {
        max = cur.data;
      }
      cur = cur.next;
    }
    return max;
  }
  sort() {
    let cur = this.top;
    let prev = this.top;
    let sortingFinished = true;

    while (cur) {
      console.log("before swap", prev.data, cur.data);
      /* anytime prev item is greater than cur item in the stack
            sorting is not finished 
            swap prev and cur item data 
      */
      if (prev.data > cur.data) {
        sortingFinished = false;
        let copyPrevData = prev.data;
        prev.data = cur.data;
        cur.data = copyPrevData;
      }
      console.log("after swap,", prev.data, cur.data);
      console.log("=".repeat(30));
      // slide windows, move on to the next item
      prev = cur;
      cur = cur.next;
      /* at the end of the stack, if sorting is not finished, 
           start again from the top of stack 
           reset sortingFinised to true 
           if nothing else is left to be swapped in the next iteration, 
           this will end the loop 
           else only if one swapping happens, it will continue the loop to the botoom and 
           to the next iteration 
      */
      if (cur == null && !sortingFinished) {
        cur = this.top.next;
        prev = this.top;
        sortingFinished = true;
      }
    }
    return this.top;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = -Infinity;
  }

  count() {
    return this.size;
  }
  enqueue(data) {
    if (data > this.max) this.max = data;
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
    if (copy.data == this.max) {
      this.findMax();
    }
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
  findMax() {
    let cur = this.first;
    let max = -Infinity;
    while (cur) {
      if (cur.data > max) {
        max = cur.data;
      }
      cur = cur.next;
    }
    this.max = max;
    return max;
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const numStack = new Stack();
for (let num of numbers) {
  numStack.push(num);
}
console.log(numStack.sort());
console.log(inspect);
module.exports = {
  Node,
  Queue,
  Stack,
};
