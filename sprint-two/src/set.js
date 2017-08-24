var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[hash(item)] = item
};

setPrototype.contains = function(item) {
  return this.storage[hash(item)] != undefined
};

setPrototype.remove = function(item) {
  this.storage[hash(item)] = undefined
};

let hash = function(item) {
  let hashValue = ''
  hashValue = item.toString()
  return hashValue
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
