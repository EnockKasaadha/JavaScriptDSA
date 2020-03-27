//FIRST WE IMPLEMENT THE STACK CLASS
function Stack() {
    let items = []; //we use an array to store the stack elements.

    /*
        methods used include;
            push(element) - this adds a new item on top of stack
            pop() - this removes and returns an item on the top of stack
            peek() - this returns the top element of the stack but does not remove it
            isEmpty() - this returns true if the stack does not contain any elements
            clear() - this removes all elements in the stack
            size() - this is similar to the .length property. it returns the number of elements in the stack
    */

    //pushing elements to the stack
    this.push = function (element) {
        items.push(element);
    }

    //popping elements from the stack
    this.pop = function () {
        return items.pop(); 
    }

    //the push and the pop are the only methods for adding and removing items from the stack

    //knowing what item is on top of the stack
    this.peek = function () {
        return items[items.length-1];
    }

    //verifying if the stack is empty or not.
    this.isEmpty = function () {
        return items.length === 0;
    }

    //knowing the size and the number of items in the stack 
    this.size = function () {
        return items.length;
    }

    //Clearing the stack
    this.clear = function () {
        items = [];
    }

    //in order to inspect the contents of the stack then we implement the print helper method.
    this.print = function () {
        console.log(items.toString());
    }
}

//WE NOW MAKE USE OF THE STACK CLASS
//first we instantiate tthe stack class an we can even verify whether it is empty or not.
let stack = new Stack(); //this instantiates
console.log(stack.isEmpty()); //this outputs true if the stack is empty

//now lets add elements to the stack
stack.push(5);
stack.push(8);

//we can call the peek method to check which of these two is on top of the other
console.log(stack.peek()); //this outputs 8

//we can go on to add another element
stack.push(11);

//we can then check the size of the stack so far
console.log(stack.size()); //this outputs 3;

//finally let us add one more element
stack.push(15);

//let's remove two elements by calling the pop method twice
stack.pop();
stack.pop();
console.log(stack.size()); //this outputs 2
stack.print(); //this outputs [5, 8]
//////////////////////////////////////////////////////////////

//NOW LET US USE THE ES6 SYNTAX
class Stack {
    constructor () {
        this.items = []; //{1}
    }

    //we then add the other methods that we had declared above
}
///////////////////////////////////////////////////////////////

/*
    SOLVING PROBLEMS USING THE STACK METHOD
    stacks have various applications in the real world which may include;
        backtracking problems to remember tasks and paths visited.
        undo actions
        Java and C# use stacks to store variables and method calls 

    let us now solve some computer science problems
    we will learn the three most famous algorithms that use the stack 
*/

//the DECIMAL TO BINARY algorithm
/*
    to convert a decimal number to a binary we divide the number by 2 until the division result is 0.

    for example;
        10/2 === 5 remainder 0;
        5/2 === 2 remainder 1;
        2/2 === 1 remainer 0;
        1/2 === 0 reamainder 1;

        we push the remainders to a stack 
        the binary is the result of popping the remainders out of the stack
*/

//the following is our algorithm
function divideBy2(decNumber) {
    let remStack = new Stack(),
                   rem,
                   binaryString = '';

    while (decNumber > 0) {
        //we use Math.floor because JavaScript lacks a distingushment between integers and floating points
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);

        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;

}

//the BASE CONVERTER algorithm
function baseConverter(decNumber, base) {
    let remStack = new Stack();
                   rem,
                   baseString = '',
                   digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);

        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;

}

