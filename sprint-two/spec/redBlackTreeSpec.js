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
    redBlackTree.insert(14);
    redBlackTree.insert(3);
    redBlackTree.insert(12);
    expect(redBlackTree.left.right.value).to.equal(3);
    expect(redBlackTree.right.left.value).to.equal(12);
  });

  it('should have a working "contains" method', function() {
    redBlackTree.insert(2);
    redBlackTree.insert(17);
    redBlackTree.insert(3);
    expect(redBlackTree.contains(17)).to.equal(true);
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

  it('should rotate right correctly if two left inserts', function(){
    redBlackTree.root().insert(5);
    redBlackTree.root().insert(3);
    expect(redBlackTree.root().value).to.equal(5);
    expect(redBlackTree.root().left.value).to.equal(3);
    expect(redBlackTree.root().right.value).to.equal(11);

  })

  it('should rotate left correctly if two right inserts', function(){
    redBlackTree.root().insert(15);
    redBlackTree.root().insert(17);
    expect(redBlackTree.root().value).to.equal(15);
    expect(redBlackTree.root().left.value).to.equal(11);
    expect(redBlackTree.root().right.value).to.equal(17);

  })

  it('should rotate twice correctly after a left and a left right insertion', function(){
    redBlackTree.root().insert(5);
    redBlackTree.root().insert(6);
    expect(redBlackTree.root().value).to.equal(6);
    expect(redBlackTree.root().left.value).to.equal(5);
    expect(redBlackTree.root().right.value).to.equal(11);

  })

  it('should rotate twice correctly after a right and a right left insertion', function(){
    redBlackTree.root().insert(15);
    redBlackTree.root().insert(13);
    expect(redBlackTree.root().value).to.equal(13);
    expect(redBlackTree.root().left.value).to.equal(11);
    expect(redBlackTree.root().right.value).to.equal(15);

  })

  it('should rotate correctly after a recoloring', function(){
    redBlackTree.root().insert(5);
    redBlackTree.root().insert(17);
    redBlackTree.root().insert(16);
    redBlackTree.root().insert(20);
    redBlackTree.root().insert(19);
    redBlackTree.root().insert(28);
    redBlackTree.root().insert(32);
    expect(redBlackTree.root().value).to.equal(17);
    expect(redBlackTree.root().left.value).to.equal(11);
    expect(redBlackTree.root().right.value).to.equal(20);
    expect(redBlackTree.root().left.right.value).to.equal(16);

  })
  it('should recolor correctly after a insert', function(){
    redBlackTree = new RedBlackTree(34);
    redBlackTree.root().insert(56);
    redBlackTree.root().insert(32);
    redBlackTree.root().insert(31);//recoloring
    redBlackTree.root().insert(28);
    redBlackTree.root().insert(24);
    redBlackTree.root().insert(20);
    redBlackTree.root().insert(16);
    redBlackTree.root().insert(12);
    redBlackTree.root().insert(8);
    expect(redBlackTree.root().value).to.equal(31);
    expect(redBlackTree.root().left.black).to.equal(true);
    expect(redBlackTree.root().right.black).to.equal(true);
    expect(redBlackTree.root().left.left.red).to.equal(true);
    expect(redBlackTree.root().left.left.left.black).to.equal(true);

  })

});
