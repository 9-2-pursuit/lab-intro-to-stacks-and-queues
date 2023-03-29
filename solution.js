const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node {
  constructor(value, next = null, previous = null) {
    this.data = value;
    this.next = next;
    this.previous = previous;
  }
}


class Stack{
  constructor(){
    this.top = null;
    this.tail = null;
    this.count = 0;
    this.data = [];
  }
  push(val){
    let node = new Node(val, this.top);
    this.top = node;
    this.data.push(node);
    this.count ++;
  }
  size(){
    return this.count;
  }
  pop(){
    if(!this.top) return undefined;
    this.count --;
    this.top = this.top.next;
    let tmp = this.data.pop();
    return tmp;
  }
  isEmpty(){
    return this.count === 0;
  }
  findMin() {
    let current = this.top;
    let acc = current.data;
    while (current) {
      acc = Math.min(current.data, acc);
      current = current.next;
    }
    return acc;
  }
  peek() {
    return this.top;
  }
  sort(){
    this.data.sort((a, b)=>{
      return a.data < b.data ? -1 : 1;
    });
    this.rebuild_by_array();
  }
  rebuild_by_array(){
    if(this.count<1) return;
    this.top = this.data[0];
    for(let i =0; i < this.count; i++){
      this.data[i].next = this.data[i+1] || null;
    }
  }
}


/*
class Stack {
  constructor() {
    this.top = null;
    this.tail = null;
    this.count = 0;

  }
  push(val) {

    let node = new Node(val)
    if (this.top) {
      node.next = this.top;
    }
    this.top = node;
    this.count++;
    if (!this.tail) this.tail = node;
  }
  size() {
    return this.count;
  }
  pop() {
    if (this.top) {
      let tmp = this.top;
      this.top = this.top.next;
      this.count--;
      return tmp;
    }
    return undefined;
  }
  isEmpty() {
    return this.top === null;
  }
  findMin() {
    let current = this.top;
    let acc = current.data;
    while (current) {
      acc = Math.min(current.data, acc);
      current = current.next;
    }
    return acc;
  }
  peek() {
    return this.top;
  }
  sort() {
    mergeSort(this.top);
  }

}
*/

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    const node = new Node(val, this.first);
    if(this.first) this.first.previous = node;
    if(!this.last) this.last = node;
    this.first = node;
    this.size ++;
  }
  dequeue(){
    let tmp = this.last;
    this.last = this.previous;
    this.size --;
    return tmp.data;
  }
  count(){
    return this.size;
  }
  isEmpty(){
    return this.size === 0;
  }
  peek(){
    return this.last;
  }
  getLast(){
    return this.first;
  }
  findMax(){
    let current = this.first;
    let acc = -Infinity;
    while(current){
      acc = Math.max(acc, current.data);
      current = current.next;
    }
    return acc;
  }
}
module.exports = {
  Node,
  Queue,
  Stack,
};
