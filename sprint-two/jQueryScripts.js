$(document).ready(function(){

  function binarySearchTreeFeed(){//will take binarySearchTree and feed it lots of values
    var binarySearchTree = new BinarySearchTree();
    for(var i = 0; i < 1000; i++){
      binarySearchTree.insert(Math.floor(Math.random(1000)));

    }
    var $testReport = $('<li></li>');
    $testReport.text('1000 insertions complete');
    $("#BST").append($testReport);
    for(var i = 0; i < 1000; i++){
      binarySearchTree.contains(Math.floor(Math.random(1000)));
    }
    $testReport = $('<li></li>');
    $testReport.text('1000 searches complete');
    $("#BST").append($testReport);

  }


  binarySearchTreeFeed();


});
