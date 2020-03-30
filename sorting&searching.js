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

    // THE IMPROVED BUBBLE SORT
        this.modifiedBubleSort = function () {
            var length = array.length;
            for (let i=0; i<length; i++) {
                for (let j=0; j<length-1-i; j++) {
                    if (array[j] > array[j+1]) {
                        swap(j, j+1);
                    }
                }
            }
        }

    // THE SELECTION SORT
    // the selection sort finds the min value, places it in the first position, the second min value in the 2nd position and so on.
        this.selectionSort = function () {
            var length = array.length,
            indexMin;

            for (let i = 0; i <length; i++) {
                    indexMin = i;
                    for (var j=0; j<length; j++) {
                        if (array[indexMin] > array[j]) {
                            indexMin = j;
                        }
                    }
                
                    if (i !== indexMin) {
                        swap(i, indexMin);
                    }
            }
        }

    // THE INSERTION SORT
    // this sorts assumes that the first item is sorted then it compares whether the next item should be placed infront of the first or stay where it is 
        this.insertionSort = function () {
            var length = array.length,
            j,
            temp;

            for (let i = 0; i; i<length; i++) {
                j = i;
                temp = array[i];
                
                while (j>0 && array[j-1] > temp) {
                    array[j] = array[j-1];
                    
                    j--;
                }

                array[j] = temp;
            }
        };

    // THE MERGE SORT (divide and conquer algorithm)
    // this has a better performance with a complexity of 0(n log n);
        this.mergeSort = function () {
            array = mergeSortRec(array);
        }

        // mergeSortRec() helper function
            var mergeSortRec = function (array) {
                var length = array.length;
                if (length === 1) {
                    return array;
                }

                var mid = Math.floor(length / 2),
                    left = array.slice(0, mid),
                    right = array.slice(mid, length);

                    return merge(mergeSortRec(left), mergeSortRec(right));
            }

            //merge() helper function
                var merge = function (left, right) {
                    var result = [], 
                        il = 0,
                        ir = 0;

                    while (il < left.length && ir < right.length) {
                        if (left[il] < right[ir]) {
                            result.push(left[il++]);
                        } else {
                            result.push(right[ir++]);
                        }
                    }

                    while (il < left.length) {
                        result.push(left[il++]);
                    }

                    while (ir < right.length) {
                        result.push(right[ir++]);
                    }

                    return result;
                }
