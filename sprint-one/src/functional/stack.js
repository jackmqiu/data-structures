var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value
    count++
  };

  someInstance.pop = function() {
    count = count > 0 ? count - 1 : 0
    let result = storage[count]
    storage[count] = undefined
    return result
  };

  someInstance.size = function() {
    return count
  };

  return someInstance;
};
