var BinarySearchTree = require('./BinarySearchTree.js');
var BinarySearchTreeNode = require('./BinarySearchTreeNode.js');

var myBST = new BinarySearchTree();


myBST.insert(new BinarySearchTreeNode(20, '20'));
myBST.insert(new BinarySearchTreeNode(100, '100'));
myBST.insert(new BinarySearchTreeNode(30, '40'));
myBST.insert(new BinarySearchTreeNode(10, '10'));
myBST.insert(new BinarySearchTreeNode(60, '60'));
myBST.insert(new BinarySearchTreeNode(90, '90'));
myBST.insert(new BinarySearchTreeNode(40, '40'));
myBST.insert(new BinarySearchTreeNode(50, '50'));
myBST.insert(new BinarySearchTreeNode(80, '80'));
myBST.insert(new BinarySearchTreeNode(70, '70'));

//myBST.delete(40);

myBST.dump();
