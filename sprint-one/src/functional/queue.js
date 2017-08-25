var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  var count = 0;
  var head = null;
  var tail = null;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    var node = new queueNode(value);
    if(head === null){
      head = node;
    }else{
      tail.next = node;
    }
    tail = node;
    count++;
  };

  someInstance.dequeue = function() {
    if(count === 0){
      return;
    }
    if(count === 1){
      tail = null;
    }
    var returnValue = head.value;
    head = head.next;
    count--;
    return returnValue;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

var queueNode = function(value){
  this.value = value;
  this.next = null;
}
