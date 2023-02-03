# Stacks and Queues

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will run the test output once.

Two arrays to work with

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
```

You will

- Create a Node class with properties

  - data
  - next

- Create a stack with properties
  - top
- Stack methods

  - `push`
  - `size`
  - `pop`
  - `isEmpty` check if list is empty
  - `findMin` data value
  - `peek` top node
  - `sort` - sort the stack into ascending order. **CHALLENGE** only use stacks to achieve this (no arrays or objects etc.)

- Create a queue with properties

  - `first`
  - `last`
  - `size`
  - `max` value

- Stack methods

  - `count`
  - `dequeue`
  - `enqueue`
  - `findMax` data value
  - `getLast` node
  - `isEmpty` check if list is empty
  - `peek` the first node
