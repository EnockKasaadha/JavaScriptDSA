/* 
    A binary seach tree is a binary tree.
    It allows you to sotre nodes with lesser values on the lest hand side and the nodes with greater vlaues on the right hand side.
*/

//creating a BINARY SEARCH TREE
function BinarySearchTree () {
    var Node = function (key) {
        this.key = key; //this is used to mean the node
        this.left = null;
        this.right = null;        
    }

    var root = null;

    /* 
        we need to implement the following methods
            insert(key) - this inserts a new key in the tree
            search(key) - this searches for a key in the tree and retunrs true if it exists and false if the node does not exist
            inOrderTraverse - this visits all nodes of the tree using the in-order traverse
            preOrderTraverese - this visits all the nodes of the tree using the pre-order traverse
            postOrderTraverse - this visits all nodes of the tree using the post-order traverse
            min - this returns the minimum value/key in the tree
            max - this returns the maximum value/key in the tree
            remove(key) - this removes a key from the tree
    */

    //inserting a key into a tree
        this.insert = function (key) {
            var newNode = new Node(key);

            root === null ? root = newNode : insertNode(root, newNode);
        }

        // create a helper function (insertNode());
        var insertNode = function (node, newNode) {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newnode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        }
    
}

/*
    TREE TRAVERSAL
    this is the process of visiting every node on the tree and performing an operation at each node. 
    
    there are three ways we can traverse a tree and there are;
        1. in-order traversal
        2. pre-order traversal
        3. post-order traversal

    lets take a deeper dive into the three
*/

    // IN-ORDER TRAVERSAL
    // This visits all nodes in an ascending order
    // this means nodes are visited from the smalles to the largest
    // this traversal is used to sort a tree

        this.inOrderTraverse = function (callback) {
            inOrderTraverseNode(root, callback);
        }

        // we now create the helper callback function
            var inOrderTraverseNode = function (node, callback) {
                if (node !== null) {
                    inOrderTraverseNode (node.left, callback);
                    callback (node.key);
                    inOrderTraverseNode (node.right, callback);
                }
            }

                // let us try to execute the traversal
                    // first we create a callback function that will print the values
                    function printNode (value) {
                        console.log(value);
                    }
                    //then we call the traversal
                    tree.inOrderTraverse(printNode);
///////////////////////////////////////////////////

    // PRE-ORDER TRAVERSAL
        this.preOrderTraversal = function (callback) {
            preOrderTraversalNode (root, callback);
        }
        // the preOrderTraverseNode method is as follows
        preOrderTraversalNode = function (node, callback) {
            if (node !== null) {
                callback (node.key);
                preOrderTraversalNode(node.left, callback);
                preOrderTraversalNode(node.right, callback);
            }
        }
//////////////////////////////////////////////////

// POST ORDER TRAVERSAL
this.postOrderTraverse = function (callback) {
    postOrderTraverseNode (root, callback);
}

var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);

        callback(node.key);
    }
}
//////////////////////////////////////////////
// SEARCHING FOR VALUES IN TREES
    // FINDING THE MINIMUM AND MAXIMUM VALUES
        // the min value is always the last on the left while the max on the right
        this.min = function () {
            return minMode(root);
        }

        //the callback minMode function
        var minNode = function (node) {
            if (node) {
                while (node && node.left !== null) {
                    node = node.left;
                }

                return node.key;
            }

            return null;
        }
        /********************************/
        // the max value is always the last to the right
        this.max = function () {
            return maxNode(root);
        }

        var maxNode = function (node) {
            if (node) {
                while (node && node.right !== null) {
                    node = node.right;
                }

                return node.key;
            }

            return null;
        }

    // SEARCHING FOR A SPECIFIC VALUE
        this.search = function (key) {
            return searchNode(root, key);
        }

        var searchNode = function (node, key) {
            if (node === null) {
                return false;
            }

            if (key < node.key) {
                return searchNode(node.left, key);
            } else if (key > node.key) {
                return searchNode(node.right, key);
            } else {
                return true;
            }
        }