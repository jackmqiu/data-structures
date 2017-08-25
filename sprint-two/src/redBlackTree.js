
var RedBlackTree = function(value) {
  let redBlackTree = Object.create(RedBlackTree.prototype)

  redBlackTree.value = value
  redBlackTree.black = true
  redBlackTree.red = false
  redBlackTree.right = null;
  redBlackTree.left = null;

  redBlackTree.parent = null;
  redBlackTree.uncle = null;
  redBlackTree.grandfather = null;

  return redBlackTree;
};

RedBlackTree.prototype.insert = function(value) {
  // BST insertion first
  let newNode = RedBlackTree(value)
  newNode.recolor()

  let recursion = function(node) {
    if(node.value > value) {
      if(node.left === null) {
        node.left = newNode
        newNode.parent = node;
        ancestorUpdate(newNode)
      } else {
        recursion(node.left)
      }
    } else {
      //node.value < newNode.value
      if(node.right === null) {
        node.right = newNode
        newNode.parent = node;
        ancestorUpdate(newNode)
      } else {//if node.right exists, recur on node.right
        recursion(node.right)
      }
    }
  }
  recursion(this)
  //Fixing the violation

  var colorUpdate = function(node){
    if(node.uncle){
      if(node.uncle.red && node.parent.red){
        node.uncle.recolor()
        node.parent.recolor()
        if(node.grandfather.parent){
          node.grandfather.recolor();
        }
      }
    }
  }
  colorUpdate(newNode);
}

RedBlackTree.prototype.recolor = function(){
  this.red = this.black;
  this.black = !this.red;
}

var ancestorUpdate = function(node){

  node.grandfather = node.parent.parent;
  if(node.grandfather === null){
    return;
  }
  if(node.grandfather.left === null){
    return;
  }
  if(node.grandfather.left.value === node.parent.value){

    node.uncle = node.grandfather.right;
  }else{
    node.uncle = node.grandfather.left;
  }
}

var leftRotation = function(node) {

}

var rightRotation = function(node) {

}

RedBlackTree.prototype.contains = function(value) {
  let recursion = function(node) {
    if(node.value > value) {
      if(node.left === null) {
        return false
      } else {
        return recursion(node.left)
      }
    } else if(node.value < value) {
      if(node.right === null) {
        return false
      } else {
        return recursion(node.right)
      }
    } else {
      return true
    }
  }
  return recursion(this)
}
