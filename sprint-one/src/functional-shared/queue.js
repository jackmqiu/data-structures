var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let queue = {}
  queue.storage = {}
  queue.count = 0
  extend(queue, queueMethods)

  return queue
};

let extend = function(to, from) {
	for(let key in from) {
		to[key] = from[key]
	}
}

var queueMethods = {};

queueMethods.enqueue = function(value) {
	for(let index in this.storage) {
      this.storage[this.count - index] = this.storage[this.count - index - 1]
    }
    this.storage[0] = value
    this.count++
}

queueMethods.dequeue = function() {
	if(this.count > 0) { 
      this.count--
      let result = this.storage[this.count]
      return result
    }
}

queueMethods.size = function() {
	return this.count
}
