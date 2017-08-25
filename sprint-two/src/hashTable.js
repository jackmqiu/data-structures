

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.map = [];
  this.count = 0;

};

HashTable.prototype.reHash = function(){
  var oldMap = this.map;
  this.map = []
  this.count = 0;
  for (var i = 0; i < oldMap.length; i++){
    if(oldMap[i] != undefined){
      for (var j = 0; j < oldMap[i].length; j++){
        this.insert(oldMap[i][j][0],oldMap[i][j][1]);
      }
    }
  }
}

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.count++;
  this.map[index] = this.map[index] || [];
  var inserted = false;
  for (var i = 0; i < this.map[index].length; i++){
    if(this.map[index][i][0] === k){
      this.map[index][i][1] = v;
      inserted = true;
    }
  }
  if(!inserted){
    this.map[index].push([k, v]);
  }


  if(this.count / this._limit >= 0.75){
    this._limit *= 2;
    this.reHash();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this.map[index].length; i++){
    if(this.map[index][i][0] === k){
      return this.map[index][i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.count--;
  for (var i = 0; i < this.map[index].length; i++){
    if(this.map[index][i][0] === k){
      this.map[index].splice(i, 1);
      break;
    }
  }

  if(this.count / this._limit <= 0.25 && this._limit > 8){
    this._limit /= 2;
    this.reHash();
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
