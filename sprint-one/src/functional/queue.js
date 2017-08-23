var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    for(let index in storage) {
      storage[count - index] = storage[count - index - 1]
    }
    storage[0] = value
    count++
  };

  someInstance.dequeue = function() {
    if(count > 0) { 
      count--
      let result = storage[count]
      return result
    }
  };

  someInstance.size = function() {
    return count
  };

  return someInstance;
};
