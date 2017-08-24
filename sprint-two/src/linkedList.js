var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value)
    if(list.tail != null) {
      list.tail.next = node
    } else {
      list.head = node
    }
    list.tail = node
  };

  list.removeHead = function() {
    if(list.head != null) {
      let nextNode = list.head.next
      let formerNode = list.head
      formerNode.next = null
      list.head = nextNode
      return formerNode.value
    }
  };

  list.contains = function(target) {
    let search = function(node) {
      if(node.value === target) {
        return true
      } else if(node.next != null) {
        return search(node.next)
      } else {
        return false
      }
    }
    if(list.head != null) {
      let result = search(list.head)
      return result
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
