

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.map = {};
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(index === 0){
    this._limit = this._limit * 2;
    index = getIndexBelowMaxForKey(k, this._limit);
  }
  this.map[index] = this.map[index] || {};
  this.map[index][k] = v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this.map[index][k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.map[index][k] = undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
