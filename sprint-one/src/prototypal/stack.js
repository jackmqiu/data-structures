var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stack = Object.create(stackMethods)
  stack.count = 0

  return stack
};

var stackMethods = {};

stackMethods.push = function(value) {
	this[this.count] = value
	this.count ++
}

stackMethods.pop = function() {
	let result
	if(this.count > 0) {
		this.count --
		result = this[this.count]
	}
	return result
}

stackMethods.size = function() {
	return this.count
}
