var util = require("util");
var EventEmitter = require("events");
var extend = util._extend;

var BinarySearchTreeNode = require('./BinarySearchTreeNode.js');

var BinarySearchTree = function(options) {
	var defaultOptions = {
		data: null
	};
	
	this.options = extend(defaultOptions, options);

	this._root = this.options.data;

	EventEmitter.call(this);
};

util.inherits(BinarySearchTree, EventEmitter);

BinarySearchTree.prototype = extend(BinarySearchTree.prototype, {
	_delete: function() {

	},

	dump: function() {
		console.log(JSON.stringify(this._root, null, 4));
	},

	root: function() {
		return this._root;
	},

	hasRootNode: function() {
		return this._root != null;
	},

	search: function(key) {
		if (this.hasRootNode() == false) {
			return null;
		}

		var currentNode = this._root;
		while(currentNode != null) {
			if (key == currentNode.key) {
				break;
			}

			currentNode = currentNode[key < currentNode.key ? 'left' : 'right'];
		}

		return currentNode;
	},

	insert: function(node) {
		if (this.hasRootNode() == false) {
			this._root = node;
			return;
		}

		var currentNode = this._root;

		while(currentNode != null) {
			var side = node.key < currentNode.key ? 'left' : 'right';

			if (currentNode[side] == null) {
				currentNode[side] = node;
				break;
			}
			
			currentNode = currentNode[side];
		}
	},

	delete: function(key) {
		throw new Error('todo');
	},
});

module.exports = BinarySearchTree;
