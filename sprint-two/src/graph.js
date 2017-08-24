

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

var GraphNode = function(value){
  this.value = value;
  this.edges = {};
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = new GraphNode(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

    if(this.nodes[node] === undefined){
      return false;
    }

  return true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    for(var key in this.nodes[node].edges){
      this.nodes[key].edges[node] = undefined;
    }
    this.nodes[node] = undefined;


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].edges[toNode] ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = this.nodes[toNode];
  this.nodes[toNode].edges[fromNode] = this.nodes[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = undefined;
  this.nodes[toNode].edges[fromNode] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
