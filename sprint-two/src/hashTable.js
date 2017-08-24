

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.map = {};
  this.count = 0;
  this.limitMap = {}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.count++;
  this.map[index] = this.map[index] || {};
  this.map[index][k] = v
  this.limitMap[k] = this._limit
  if(this.count / this._limit >= 0.75){
    this._limit *= 2;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limitMap[k]);
  return this.map[index][k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limitMap[k]);
  this.count--;
  this.map[index][k] = undefined;
  if(this.count / this._limit <= 0.25 && this._limit > 8){
    this._limit /= 2;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
