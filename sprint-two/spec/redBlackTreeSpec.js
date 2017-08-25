describe('redBlackTree', function() {

var redBlackTree;

  beforeEach(function() {
    redBlackTree = new RedBlackTree(11);
  });

  it('should have methods named "insert", "contains"', function() {
    expect(redBlackTree.insert).to.be.a('function');
    expect(redBlackTree.contains).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.insert(14);
    redBlackTree.insert(6);
    expect(redBlackTree.left.right.value).to.equal(3);
    expect(redBlackTree.left.right.right.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.insert(7);
    expect(redBlackTree.contains(7)).to.equal(true);
    expect(redBlackTree.contains(8)).to.equal(false);
  });

  it('nodes should have correct colors', function() {
    redBlackTree.insert(14);
    redBlackTree.insert(5);
    expect(redBlackTree.right.red).to.equal(true);
    expect(redBlackTree.left.red).to.equal(true);
    redBlackTree.insert(4);
    expect(redBlackTree.black).to.equal(true);
    expect(redBlackTree.right.black).to.equal(true);
    expect(redBlackTree.left.black).to.equal(true);
    redBlackTree.insert(7);
    redBlackTree.insert(8);
    expect(redBlackTree.black).to.equal(true);
    expect(redBlackTree.right.black).to.equal(true);
    expect(redBlackTree.left.red).to.equal(true);
    expect(redBlackTree.left.right.black).to.equal(true);
    expect(redBlackTree.left.left.black).to.equal(true);
  });

});
