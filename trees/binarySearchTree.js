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
