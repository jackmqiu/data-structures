
var RedBlackTree = function(value) {

  this.value = value
  this.black = true
  this.red = false
  this.right = value === null ? null : new RedBlackTree(null);
  this.left = this.right

  this.parent = null;
  this.uncle = null;
  this.grandfather = null;

};

RedBlackTree.prototype.insert = function(value) {
  // BST insertion first
  let newNode = new RedBlackTree(value)
  newNode.recolor()

  let recursion = function(node) {
    if(node.value > value) {
      if(node.left.value === null) {
        node.left = newNode
        newNode.parent = node;
        newNode.ancestorUpdate()
      } else {
        recursion(node.left)
      }
    } else {
      //node.value < newNode.value
      if(node.right.value === null) {
        node.right = newNode
        newNode.parent = node;
        newNode.ancestorUpdate()
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
          if(node.grandfather.parent.red){
            if(node.grandfather.uncle.red){
              colorUpdate(node.grandfather);//if grandfather.uncle is red, then colorUpdate (recur)
            }else{
              if(node.grandfather.parent.left === node.grandfather){
                node.grandfather.parent.rightRotation();
              }else{
                node.grandfather.parent.leftRotation();
              }
            }
          }
        }
      }
    }
  }
  colorUpdate(newNode);

  var rotationCheck = function(node){
    if(node.grandfather && node.uncle.value === null){
      if(node.parent === node.grandfather.left){
        if(node.parent.left === node){
          //right Rotation on grandfather
          node.parent.rightRotation();
          node.parent.recolor();
          node.parent.right.recolor();
        }else{
          //left rotate on parent
          node.leftRotation();
          rotationCheck(node.left);
        }
      }else{
        if(node.parent.right === node){
          //left Rotation on grandfather
          node.parent.leftRotation()
          node.parent.recolor();
          node.parent.left.recolor();
        }else{
          //right rotate on parent
          node.rightRotation()
          rotationCheck(node.right);
        }
      }
    }
  }

  rotationCheck(newNode)
}

RedBlackTree.prototype.recolor = function(){
  this.red = this.black;
  this.black = !this.red;
}

RedBlackTree.prototype.ancestorUpdate = function(){

  this.grandfather = this.parent.parent;
  if(this.grandfather === null){
    return;
  }
  if(this.grandfather.left === this.parent){
    this.uncle = this.grandfather.right;
  } else {
    this.uncle = this.grandfather.left;
  }

}


RedBlackTree.prototype.leftRotation = function() {
  //parent becomes node left child.
  var currentParent = this.parent;
  var currentGrandfather = currentParent.parent;
  var currentUncle = this.uncle;
  var currentLeftChild = this.left;
  currentParent.right = new RedBlackTree(null);
  this.parent = currentGrandfather//assign node parent to grandparent
  currentParent.parent = this;//current parent's parent is now node
  if(currentGrandfather){
    currentGrandfather.right = this;
  }
  this.left = currentParent;
  this.uncle = currentParent.uncle;
  currentParent.uncle = currentUncle;
  currentParent.grandfather = this.parent;
  currentParent.right = currentLeftChild;
}

RedBlackTree.prototype.rightRotation = function() {
  var currentParent = this.parent;
  var currentGrandfather = currentParent.parent;
  var currentUncle = this.uncle;
  var currentRightChild = this.right;
  currentParent.left = new RedBlackTree(null);
  this.parent = currentGrandfather//assign node parent to grandparent
  currentParent.parent = this;//current parent's parent is now node
  if(currentGrandfather){
    currentGrandfather.left = this;//
  }
  this.right = currentParent;
  this.uncle = currentParent.uncle;
  currentParent.uncle = currentUncle;
  currentParent.grandfather = this.parent;
  currentParent.left = currentRightChild;
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

RedBlackTree.prototype.root = function() {
  var recursion = function(node) {
    if(node.parent === null) {
      return node
    } else {
      return recursion(node.parent)
    }
  }

  return recursion(this)
}
