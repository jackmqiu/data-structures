var BinarySearchTree = function(value) {
  let binarySearchTree = Object.create(BinarySearchTree.prototype)

  binarySearchTree.value = value
  binarySearchTree.right
  binarySearchTree.left

  return binarySearchTree
};

BinarySearchTree.prototype.insert = function(value) {
  let recursion = function(node) {
    if(node.value > value) {
      if(node.left === undefined) {
        node.left = BinarySearchTree(value)
      } else {
        recursion(node.left)
      }
    } else {
      if(node.right === undefined) {
        node.right = BinarySearchTree(value)
      } else {
        recursion(node.right)
      }
    }
  }
  recursion(this)
}

BinarySearchTree.prototype.contains = function(value) {
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

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  let recursion = function(node) {
    callback(node.value)
    if(node.left != undefined) {
      recursion(node.left)
    } else if(node.right != undefined) {
      recursion(node.right)
    }
  }
  recursion(this)
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
