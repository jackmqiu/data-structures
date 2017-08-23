var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    for (index in storage){
      storage[count - index] = storage[count - index - 1];
    }
    count++;
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    if(count === 0){
      return;
    }
    count--;
    return storage[count];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
