/* 
    An array is the simplest memory data structure that stores values sequentially that are all of the same datatype.

    JavaScript allows us to create an array with vakues form different data types though but we follow best practice and assume we cannot do this (most languages do not have this capability).
    Also in JavaScript, Arrays are mutable, meaning their data can be changed but in C and Java, we need to first state the size of the array before we use it, when it is full and we wish to add more elements, we must create a completely new array.
*////////////////////////////////////////////////////

//CREATING AND INITIALIZING ARRAYS
//assuming we are creating an array to store the days of the week.
    //we can declare and instantiate a new array using the keyword new.
        var daysOfWeek = new Array();

    //we can also declare, instantiate and also specify the length of the array.
        var daysOfWeek = new Array(7);

    //we could also pass the elements directly to its constructor
        var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    //if we want to know the length of the array we simply use the .length method
        console.log(daysOfWeek.length);
///////////////////////////////////////////////////

//ACCESING ELEMENTS AND ITERATING AN ARRAY
    //to access a particular position, we use square brackets [], and pass the index of the element we desire to access
        console.log(daysOfWeek[2]); //this outputs 'Tuesday'. arrays are )-index based

    //to access the elements, we iterate all of them with the for loop.
        for (let i = 0; i<daysOfWeek.length; i++) {
            console.log(daysOfWeek[i]);
        }

        //we can use this iteration knowlegde to find the first 20 numbers of the fibonacci sequence
            //knowing that the first two numbers of the sequence are 1 and 2 and the subsequent number is the sum of the previous two numbers
                var fib = []; // we declare an empty array to store the numbers
                fib[0] = 1; //we assign the first index to 1
                fib[1] = 1; //we assign the second one to 1 too

                for (let i = 2; i<20; i++) {
                    fib[i] = fib[i-1] + fib[i-2];
                }

                for (i = 1; i<fib.length; i++) {
                    console.log(fib[i]);
                }
///////////////////////////////////////////////////

//MANIPULATING THE ARRAY
//If we initialised an array with ten elements
    let numbers = [0,1,2,3,4,5,6,7,8,9]

    //ADDING ELEMENTS AT THE END
    //we use the PUSH() method
        numbers.push(10,11,12,13); //this adds 10,11,12,13 to the array numbers

    //ADDING ELEMENTS AT THE START
    //we use the UNSHIFT() method
        numbers.unshift(-3,-2,-1); //these numbers are added at the start of the array

    //REMOVING AN ELEMENT AT THE END 
    //we use the POP() method
        numbers.pop(); //removes the last element

    //REMOVING AN ELEMENT AT THE START
    //we use the SHIFT() method
        numbers.shift(); //removes the first element in the array

    //REMOVING ARRAYS AT A PARTICULAR POSITION
    //Using the SPLICE() method
        numbers.splice(5,3); //digit 5 represents the index at which the delete should start i.e numbers[5];
                             //digit 3 represents how many elements to delete

        numbers.splice(5,0,2,3,4); //this means start deleting from index 5 i.e numbers[5].
                                   //the next digit, 0, means delete nothing
                                   //the rest of the digits onwards are just added to the array starting from position 5.

//TWO-DIMENSIONAL AND MULTI-DIMENSIONAL ARRAYS
//assuming we need to store the temperature recorded in two days, we can declare an array where each index stores temperatures of a single day
    let avgTemp = [];
    avgTemp[0] = [72,75,79,79,81,81];
    avgTemp[1] = [81,79,75,75,73,72];
        //this can also be written as;
            avgTemp = [[72, 75, 79, 79, 81, 81], [81, 79, 75, 75, 73, 72]]

    //N.B: JavaScript does not support matrices

    //ITERATING TWO DIMENSIONAL ARRAYS
    //we use a nested for loop to iterate through the columns and the rows.
        function printMatrix() {
            //variable i represents tne rows 
            //variable j represents the columns
            for (let i=0; i<avgTemp.length; i++) {
                for (let j=0; j<avgTemp[i].length; j++) {
                    console.log(avgTemp[i][j]);
                }
            }
        }

//MULTI-DIMENSIONAL ARRAYS
//let's create a 3x3 matrix
//this matrix contains i rows, j columns and z depths
avgTemp[0] = [72, 75, 79, 79, 81, 81];
avgTemp[1] = [81, 79, 75, 75, 73, 72];
avgTemp[3] = [34, 23, 56, 87, 98, 23];
    //this can also be written as;
        avgTemp = [[72, 75, 79, 79, 81, 81], [81, 79, 75, 75, 73, 72], [34, 23, 56, 87, 98, 23]];

        //to iterate through this array nest the for loops as follows
            function printMatrix() {
                //variable i represents tne rows 
                //variable j represents the columns
                for (let i = 0; i < avgTemp.length; i++) {
                    for (let j = 0; j < avgTemp[i].length; j++) {
                        for (let z=1; z<avgTemp[i][j].length; z++){
                            console.log(avgTemp[i][j][z]);
                        }
                    }
                }
            }
////////////////////////////////////////////////////////////

//REFERENCES FOR JAVASCRIPT ARRAY METHODS
/*
    JavaScript arrays are nodeifed objects
    This means that every array that is created has a few methods that are available to be used.
    Javascript arrays have more capabilities available than primitive arrays in other languages. We actually don't need to write basicc capabilities ourselves like removing and adding elements in/from the middle of the data structure.
*/

    //concat()
        //this joins multiple arrays and returns a copy of the joined arrays
            let zero = 0;
            let positiveNumbers = [1,2,3];
            let negativeNumbers = [-3,-2,-1];
            let numbers = negativeNumbers.concat(zero,positiveNumbers); //outputs [-3,-2,-1,0,1,2,3]

    //ITERATOR FUNCTIONS
    //JavaScript has iterator methods that can be used instead of the for loops
        //given an array
            let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
            //and a function that returns true if the number is a multiple of 2(even) and false otheewise
            let isEven = function (x) {
                //returns true if x is a multiple of two;
                console.log(x);
                return (x%2 == 0) ? true : false;
            };

    //every()
    //this method iterates each element of the array until the return of the function is false
        numbers.every(isEven);

    //some();
    //this is opposite of every();. it iterates the array until the return of the function is true
        numbers.some(isEven);

//other methods are described in the ./functionalProgramming.js

            


