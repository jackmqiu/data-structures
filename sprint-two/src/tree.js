var Tree = function(value) {
  var newTree = {};

  newTree.value = value;

  extend(newTree, treeMethods);// your code here
  newTree.children = [];  // fix me

  return newTree;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var searchTree = function(tree){
    if(tree.value === target){
      return true;
    }
    if(tree.children.length != 0){
      for(var i = 0; i < tree.children.length; i++){
        if(searchTree(tree.children[i])){
          return true;
        }

      }
    }
    return false;

  }
  return searchTree(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
