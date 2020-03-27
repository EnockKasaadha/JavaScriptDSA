/* 
    the BIG O NOTATION 
        this is used to describe the performance of an algorithm. 
        We usually use the resources such as CPU(time) Usage, memory usage, and network usage to measure the efficiency of an algorithm
        When talking about the Big-O notation, we usually consider the CPU (time) usage

        when analysing algorithms, we encounter these classes (types) of functions
            1. Constant function => O(1)
            2. Logarthmic function => O(log(n))
            3. Poly-logarithmic function => O((log(n))c)
            4. Linear function => O(n)
            5. Quadratic function => O(n^2)
            6. Polynomial function => 0(n^c)
            7. Exponential function => O(c^n)
*/

//UNDERSTANDING THE BIG- NOTATION

//O(1)
//Consider the following function:
    function increment(num){
        return ++num;
    }
//when this function is executed any number of times, the process will take the same time for each execution therefore the function is constant
////////////////////////////////////////////////////////

//O(n)
function sequentialSearch(array, name) {
  for(let i = 0; i<array.length; i++) {
      if (item === array[i]) {
        return i;          
      }
  }
  
  return -1;

}
/* 
    if we pass 10 elements ([1,...,10]) to this function and look for element 1, we will find it easily in time(x) since it is our first element 

    if we are looking for element 11, the function will be executed 10 times to loop through each element and will not find 11 therefore it will return -1.  t
    this will have taken 10x times 

    therefore the time taken depends on the number of elements passed in and the value we are looking for. if the value we are looking for does not exist then the function will be executed (numberOfElements)(x). 
    this is called the WORST CASE SCENARIO
*/////////////////////////////////////////////////////////

//O(n^2)
//let us use the bubble sort algorithm example;
    function swap(array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    }

    function bubbleSort(array) {
        var length = array.length;

        for (let i = 0; i<length; i++) {
            for (let j = 0; j<length-1; j++) {
                if (array[j] > array[j+1]) {
                    swap(array, j, j+1);
                }
            } 
        }
    }

    //if we execute the bubbleSort for an array of size 10, the time taken will be 100(10^2)


