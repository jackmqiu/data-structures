var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0
  this.storage = {}
};

Queue.prototype.enqueue = function(value) {
	for(let index in this.storage) {
      this.storage[this.count - index] = this.storage[this.count - index - 1]
    }
    this.storage[0] = value
    this.count++
}

Queue.prototype.dequeue = function() {
	if(this.count > 0) { 
      this.count--
      let result = this.storage[this.count]
      return result
    }
}

Queue.prototype.size = function() {
	return this.count
}