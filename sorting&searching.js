/**
 * before we search an algorithm, we have to sort it
 */

 // let's create an array that we will sort and search
    function ArrayList () {
        var array = [];

        this.insert = function (item) {
            array.push(item);
        }
        this.toString = function () {
            return array.join();
        }
    }

    // THE BUBBLE SORT
    // this is the simplest but worst-case sorting algorithm with respect to time
    //it compares every two adjacent items and swaps them if the first one is bigger than the second one
        this.bubbleSort = function () {
            var length = array.length;
            
            for (let i=0; i<length; i++) {
                for (let j=0; j<length-1; j++) {
                    if (array[j] > array[j+1]) {
                        swap(array, j, j+1);                        
                    }
                }
            }
        }

        // now we declare the swap function (this is a private function that is only available only to the code inside the Arraylist class)
            var swap = function (array, index1, index2) {
                var aux = araay[index1];
                array[index1] = array[index2];
                array[index2] = aux;
            }