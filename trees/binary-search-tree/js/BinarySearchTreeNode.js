var util = require("util");
var EventEmitter = require("events");
var extend = util._extend;

var BinarySearchTreeNode = function(key, value) {
	this.key = key;
	this.value = value;

	this.left = null;
	this.right = null;
}

module.exports = BinarySearchTreeNode;
