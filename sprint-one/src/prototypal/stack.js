var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.count = 0;
  return stack;
};




var stackMethods = {};

stackMethods.size = function(){
  return this.count;
}

stackMethods.push = function(value){
  this[this.count] = value;
  this.count++;
}

stackMethods.pop = function(){
  if(this.count !== 0){
    this.count--;
    var result = this[this.count];
  }
  return result;
}
