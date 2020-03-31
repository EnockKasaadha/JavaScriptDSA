/* 
    A LINKED list is a a dynamic data structure.
    This means that we can add and remove items from it at will and it will grow as needed.
    However this DS has a fixed size i.e inserting or removing an item will not shift the elements automatically

    Each element in the linked list has a node that stores the element and also a reference/pointer/link that points to the next element.

    In a linked list, if we want to access and element from the middle, we need to start from the beginning (head) and iterate the list until we find the desired element.

    Some real world examples that can depict a linked list are a;
        A CONGA LINE
            Here each person is an element, and the hands are the pointers that link to the next person in the conga line.
            You can add people to the line-you just need to find the spot where you want to add this person, decouple the connection, then insert the new person and make the connection again.

        THE SCAVENGER HUNT 
            Here you have a clue and this clue is a link to another clue. 
            The only way to get to the middle of the list is to start from the beginning.

        A TRAIN
            A train consists of wagons and each wagon is linked to the other
*//////////////////////////////////////////////

//let us now inplement the data structure
function LinkedList() {

    //we then create a helper class which represents the item that we want to add to the list
    let Node = function(element){
        this.element = element;
        this.next = null;
    }

    let length = 0; //this stores the number of items that we have on the list 
    let head = null; //this stores the reference for the first node as well

    //we need to add new items to the list
    this.append = function (element){
        //there are two scenarios when adding elements to a linked list
            //one where the list is empty and we are adding its first element
            //one where the list is not empty and we are appending elements to it

        let node = new Node(element),
            current;

        if (head === null) {
            //when list is empty
            head = node;    
        } else {
            //when list is not empty
            current = head;

            //loop the list until you find the last item
            while (current.next) {
                current = current.next;
            }

            //get the last item and assign next to node to make the link
            current.next = node;
        }

        length++; //update the size of the list

    };

    //let us try to add elements to the list 
    let list = new LinkedList();
    list.append(15);
    list.append(10);
    ///////////////////////////////////////////////

    //this inserts a new item at a specified position
    this.insert = function (position, element) {
        //check for out of bounds value
        if (position >= 0 && position<= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }

            length++; //update size of the list

            return true;
        } else {
            return false;
        }
    };

    //this removes an item at a specified postion
    this.removeAt = function (position) {

        //check for out-of-bounds values
        if (postiion > -1 && position < length) {
            let current = head,
                previous,
                index = 0;

            //removing first item
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                //link previous with current's next: skip it to remove 
                previous.next = current.next;
            }

            length--;

            return current.element;
        } else {
            return null;
        }
    };

    //this removes an item from the list
    this.remove = function (element) {};

    //this returns an index of an element in the list, if the element is not in the list, it returns -1
    this.indexOf = function (element) {
        let current = head,
            index = -1;

        while (current) {
            if (element === current.element) {
                return index;
            }

            index ++;
            current = current.next;
        }

        return -1;
    };

    //this returns true if the linked list does not contain any items an false if it does
    this.isEmpty = function () {
        return length === 0;
    };

    //this returns the number of elements in the list. It is similar to the .length property
    this.size = function () {
        return length;
    };

    //we need to overwrite the default toString JavaScript method because linked lists use NODE class as an item.
    this.toString =  function () {
        let current = head,
            string  = '';

        while (current) {
            string+=current.element + (current.next ? 'n' : '');
            current = current.next;
        }
    };

    //to print out the elements we have we will use
    this.print = function () {};
}
//////////////////////////////////////////////////////////////////////

//DOUBLY LINKED LISTS
/* 
    the difference between a doubly linked list and a normal linked list is that in a normal linked list, we make alink form one node to the next one only while in the doubly linked list we have a double link; one for the next element and one for the previous element
*/

//IMPLEMENTING A DOUBLY LINKED LIST
function DoublyLinkedList() { 
    let Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    let length = 0;
    let head = null;
    let tail = null;

    //THE THE METHODS NEEDED ARE ADDED DOWN HERE
    //inserting a new element at any position
        this.insert = function (position, element) {
            //check for the out-of-bounds values
            if (position >= 0 && postion <= length) {
                let node = new Node(element),
                current = head,
                previous,
                index = 0;

                // add on first position
                if (position === 0) {
                    if (!head) {
                        head = node;
                        tail = node;
                    } else {
                        node.next = current;
                        current.prev = node;
                        head = node;
                    }
                } else if ( position === length) {
                    current = tail;
                    current.next = node;
                    node.prev = current;
                    tail = node;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }

                    node.next = current;
                    previous.next = node;

                    current.prev = node;
                    node.prev = previous;
                } 

                length++;// update size of the list

                return true;

            } else {
                return false;
            }    
        }

    //removing elements at any position
        this.removeAt = function (position) {
            
            //look for put-of-bounds values
            if (position > -1 && postion < length) {
                
                let current = head,
                    previous,
                    index = 0;

                    // removing first item
                    if (position === 0) {
                        
                        head = current.next;

                        // if there is only one item, update tail
                        if (length === 1) {
                            tail = null;
                        } else {
                           head.prev = null; 
                        }
                    } else if (position === length-1) {
                        current = tail;
                        tail = current.prev;
                        tail.next = ull;
                    } else {
                        while (index++ < position) {
                            previous = current;
                            current = current.next;
                        }

                        // link previous with current's mext - skip it
                        previous.next = current.next;
                        current.next.prev = previous;
                    }

                    length--;

                    return current.element;
            } else {
                return null;
            }
        }
}

// CIRCULAR LINKED LISTS
// this is a list whose last element's pointer does not make a reference to null, but to the first element(head)
