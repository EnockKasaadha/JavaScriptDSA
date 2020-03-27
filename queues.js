/*
    A QUEUE is an ordered collection of items with FIFO output

    examples include lines at movies, cafeteria where the last person has to wait for the person infront to be served. 
    A very popular computer science example is the printing line where one document has to wait for the one infront to be printed
*/

////////////////////////////////////////////////////
//CREATING A QUEUE
//first we create our own class of queue
function Queue() {
    //we need a data structure that will store the queue elements
    let items = [];

    /*
        we will use the following methods;
            enqueue(element) - this adds a new item at the back of the queue
            dequeue() - this removes and returns the first item from the queue
            front() = this returns the first element from the queue, the first one added and the first one that will be removed
            isEmpty() - this returns true if the queue contains no elements.
            size() - this returns the number of elements in the queue. Similar to the .length property
    */

    //adding new items to the queue
    this.enqueue = function (element) {
        items.push(element);
    }

    //removing first item from the queue
    this.dequeue = function () {
        return items.shift();
    }

    //returning an item that is at the front (0 index)
    this.front = function () {
        return items[0];
    }

    //verifying if the queue is empty
    this.isEmpty = function () {
        return items.length === 0;
    }

    //knowing how many elements are in the queue
    this.size = function () {
        return  items.length;
    }

    //checking the element in the queue
    this.print = function () {
        console.log(items.toString());
    }
}
//////////////////////////////////////////////////

//to use the queue class we instantiate it 
let queue = new Queue();

//we can add elements to our queue
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('camila');

//we can then implement the different method we declared so that we use the queue
///////////////////////////////////////////////////////

//SOLVING ALGORITHMS WITH THE QUEUE DATA STRUCTURE
/* 
    The PRIORITY QUEUE
    there are times when the items are removed according to priority and not position.
*/

//this is how we implement the priority queue class
function PriorityQueue() {
    let items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    //then we add elements according to their priority
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);

        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i,0,queueElement);

                added = true;

                break;
            }
            
        }

        if (!added) {
            items.push(queueElement);
        }
    }

    //we can also see the new elements according to their priorities.
    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    }

    //we can then add other methods as we did above
}
/////////////////////////////////////////////

//The CIRCULAR QUEUE(The Hot Potato Queue)
/* 
    This type of queue is similar to the the hop potato game where children are organised in a circle and  a hot poptato is passed around. When the hot potato stops being passed around, the child with it is eliminated and the game goes on until only one child is left
*/

//let us implement the simulation of the hot potato game using the queue data structure
function hotPotato(nameList, num) {
    let queue = new Queue();

    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);    
    }

    let eliminated = '';
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
          queue.enqueue(queue.dequeue()); //this starts simulating the hot potato game    
        }

        eliminated = queue.dequeue();
        console.log(eliminated + ' was eliminated from the hot potato game.');
    }

    return queue.dequeue();
}


