const { Node, Stack, Queue } = require("../solution.js");

const { nums, words } = require("../data/data.js");

describe("Stack", () => {
  let wordStack, numStack;
  beforeAll(() => {
    wordStack = new Stack();
    for (let word of words) {
      wordStack.push(word);
    }
    numStack = new Stack();
    for (let num of nums) {
      numStack.push(num);
    }
  });
  test("Can create a new node", () => {
    let newNode = new Node(111);
    expect(newNode).toStrictEqual(new Node(111));
  });
  test("Can create a new stack", () => {
    let newStack = new Stack();
    expect(newStack).toStrictEqual(new Stack());
  });
  test("Can add to stack using push method", () => {
    let newStack = new Stack();
    newStack.push(1);
    expect(newStack.top.data).toStrictEqual(1);
  });
  test("Can remove from stack using pop method", () => {
    expect(wordStack.pop().data).toStrictEqual("dog");
  });
  test("Count size of stack", () => {
    expect(wordStack.size()).toEqual(8);
  });
  test("Check if stack is empty", () => {
    let testStack = new Stack();

    expect(testStack.isEmpty()).toEqual(true);
    expect(wordStack.isEmpty()).toEqual(false);
  });
  test("Peek at top of stack", () => {
    expect(wordStack.peek().data).toStrictEqual("lazy");
  });
  test("Find minimum data value", () => {
    expect(numStack.findMin()).toEqual(0);
  });
  test("Sort the stack, minimum value on top", () => {
    wordStack.sort();
    expect(wordStack.top.data).toEqual("brown");
  });
});

describe("Queue", () => {
  let wordQueue, numQueue;
  beforeAll(() => {
    wordQueue = new Queue();
    for (let word of words) {
      wordQueue.enqueue(word);
    }
    numQueue = new Queue();
    for (let num of nums) {
      numQueue.enqueue(num);
    }
  });
  test("Can create a new node", () => {
    let newNode = new Node(111);
    expect(newNode).toStrictEqual(new Node(111));
  });
  test("Can create a new queue", () => {
    let newQueue = new Queue();
    expect(newQueue).toStrictEqual(new Queue());
  });
  test("Can add to queue using enqueue method", () => {
    let newQueue = new Queue();
    newQueue.enqueue(2);
    expect(newQueue.first.data).toStrictEqual(2);
  });
  test("Can remove from queue using dequeue method", () => {
    expect(wordQueue.dequeue()).toEqual("the");
  });
  test("Count size of queue", () => {
    expect(numQueue.count()).toEqual(11);
  });
  test("Check if queue is empty", () => {
    const newQueue = new Queue();
    expect(newQueue.isEmpty()).toEqual(true);
    expect(numQueue.isEmpty()).toEqual(false);
  });
  test("Peek at first in queue", () => {
    expect(numQueue.peek().data).toStrictEqual(1);
  });
  test("Get last in queue", () => {
    expect(wordQueue.getLast().data).toEqual("dog");
  });
  test("Find maximum value", () => {
    expect(numQueue.findMax()).toStrictEqual(10);
  });
});
