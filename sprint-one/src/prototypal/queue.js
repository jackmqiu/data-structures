var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.count = 0;
  queue.storage = {};
  return queue;
};


var queueMethods = {};

queueMethods.enqueue = function(value){
  for (index in this.storage){
    this.storage[this.count - index] = this.storage[this.count - index - 1];
  }
  this.count++;
  this.storage[0] = value;
}

queueMethods.dequeue = function(){
  if(this.count === 0){
    return;
  }
  this.count--;
  return this.storage[this.count];
}

queueMethods.size = function(){
  return this.count;
}
