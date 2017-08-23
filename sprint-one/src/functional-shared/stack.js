var Stack = function() {
  var stack = {};// Hey! Rewrite in the new style. Your code will wind up looking very similar,
  stack.count = 0;// but try not not reference your old code in writing the new style.
  extend(stack, stackMethods);
  return stack;
};

var extend = function(to, from){
  for (key in from){
    to[key] = from[key];
  }
}
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
