const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

//Creando la clase del Nodo

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Creating the stack class

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const node = new Node(data);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      ///empieza por el elementp del top===> luego dentro del while este elemento del top se va transformando en el next de ese mismo elemento y asi sucesivamente hasta que no haya mas next's termine el ciclo y retorne el contador
      count++;
      current = current.next;
    }
    return count;
  }

  pop() {
    if (!this.top) {
      return null;
    } else {
      const popped = this.top; //almacenamos el nodo que estoy sacando (si no lo amaceno lo pierdo cuando muevo el ancla del top )
      this.top = this.top.next; // aqui estamos almacenando el valor del nodo que etsba por debajo, en lo que ahora es mi nuevo top.

      return popped;
    }
  }

  isEmpty() {
    return !this.top;
  }

  findMin() {
    // min = null
    // si es null ==> min = valor del primer nodo
    // si no es null ==> valor del nodo actual < min
    // min = valor actual del nodo

    let min = null;
    if (this.top.next === null) {
      min === this.top.data;
    } else {
      let topUpper = this.top;
      let min = topUpper.data;
      while (topUpper) {
        if (topUpper.data < min) {
          min = current.next;
        }
        topUpper = topUpper.next;
      }
      return min;
    }

    //1** . declarar una variable con el valor null===> aqui almacenaremos el valor con el que vamos a comparar la data de cada uno de los nodos recorridos.
    //1. Ir recorriendo la lista obteniendo los valores de la data del nodo.
    //2.
  }

  peek() {
    return this.top;
  }

  sort() {
    if (!this.top) {
      return null;
    } else {
      const ordenarStack = new Stack();
      while (!this.isEmpty()) {
        const temp = this.pop();
        while (!ordenarStack.isEmpty() && ordenarStack.peek() > temp) {
          this.push(ordenarStack.pop());
        }
        ordenarStack.push(temp);
      }
      this.top = ordenarStack.top;
    }

  }
}

// Creating a Queue class:

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

  dequeue() {
    if (!this.first) {
      return null;
    } else {
      const dataFirstEle = this.first.data;
      this.first = this.first.next;
      this.size--;

      if (!this.first) {
        this.last = null;
      }

      if (dataFirstEle === this.maxValue) {
        /*** */
        this.maxValue = this.findMax();
      }

      return dataFirstEle;
    }
  }

  enqueue(data) {
    const node = new Node(data);

    // ENQUEUE
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size++;

    // ========

    // EXTRA KEEP TRACKING OVER THE MAX VALUE
    if (!this.maxValue || data > this.maxValue) {
      this.maxValue = data;
    }
  }

  findMax() {
    let firstPut = this.first;
    let max = firstPut.data;

    while (firstPut) {
      if (firstPut.data > max) {
        max = firstPut.data;
      }

      firstPut = firstPut.next;
    }
    return max;
  }
  isEmpty() {
    return !this.first;
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
