
var RedBlackTree = function(value) {
  let redBlackTree = Object.create(RedBlackTree.prototype)

  redBlackTree.value = value
  redBlackTree.black = false
  redBlackTree.red = false
  redBlackTree.right
  redBlackTree.left

  return redBlackTree;
};

RedBlackTree.prototype.insert = function(value) {
  // BST insertion first
  let newNode = RedBlackTree(value)
  newNode.red = true

  let recursion = function(node) {
    if(node.value > value) {
      if(node.left === undefined) {
        node.left = newNode
      } else {
        recursion(node.left)
      }
    } else {
      if(node.right === undefined) {
        node.right = newNode
      } else {
        recursion(node.right)
      }
    }
  }
  recursion(this)
  //Fixing the violation

}

var leftRotation = function(node) {

}

var rightRotation = function(node) {

}

RedBlackTree.prototype.contains = function(value) {
  let recursion = function(node) {
    if(node.value > value) {
      if(node.left === undefined) {
        return false
      } else {
        return recursion(node.left)
      }
    } else if(node.value < value) {
      if(node.right === undefined) {
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
