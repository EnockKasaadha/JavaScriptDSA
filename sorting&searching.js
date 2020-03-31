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

    /* 
        THE QUICK SORT
            This is probably the most used sorting algorithm
            it has an 0(n log n) complexity but usually performs better than any other algorithm with the same complexity

            this is how it is implemented
                1. first, we need to select an item from the array called pivot, which is the middle item of the array.
                2. this creates two pointers, the left pointer that points to the first item and the right pointer that points to the last item in the array
                3. we now move the left pointer until we find an item that is greater than the pivot and we move the right pointer until we find an item that is lesser than the pivot and swap them.
                4. we repeat this process until the left hand side pointer passes the right- hand side pointer. this process helps you to have values that are lesser than the pivot on the left and the ones greater than the pivot on the right. this is called the PARTITION OPERATION
                5. This process is repeated for the greater values and the lesser values until the data is sorted
    */

    this.quickSort = function(array,left, right) {
        var index;

        if (array.length > 1) {
            index = partition(array, left, right);;

            if (left < index - 1) {
                this.quickSort(array, left, index - 1);
            }

            if (index > right) {
                this.quickSort(array, index, righty);
            }
        }
    }

        //the partition process
        var partition = function(array, left, right) {
            var pivot = array[Math.floor((right + left) / 2)],
                i = left,
                j = right;

            while (i <= j) {
                while (array[i] < pivot) {
                    i++;
                }
                
                while (array[j] > pivot) {
                    j--;
                }

                if (i <= j) {
                    swap(array, i, j);
                    i++;
                    j++;
                }
            }

            return i;
        }

         // the swap function is similar to the one we created above but we can swap it with this ES6
            [array[index1], array[index2]] = [array[index2], array[index1]]

    // THE HEAP SORT
    /* 
        The heap sort treats an array as a binary tree
            1. Index 0 is the root of the tree
            2. the parent of any node N is N/2 (with the exception of the root node)
            3. the left-hand side child of a node L is 2*L
            4. the right-hand side of the node R is 2*R+1
    */

        this.heapSort = function () {
            var heapSize = array.length;
            buildHeap(array);

            while (heapSize > 1) {
                heapSize--;
                swap(array, 0, heapSize);
                heapify (array, heapSize, 0);
            }
        }

        // the bulidHeap() function
            var buildHeap = function (array) {
                var heapSize = array.length;
                for (var i = Math.floor(array.length /2); i>=0; i--) {
                    heapify(array, heapSize , i);
                }
            }

            // the heapify() function
                var heapify = function(array, heapSize, i) {
                    var left = i * 2 + 1,
                        right = i * 2 + 2,
                        largest = i;

                    if (left < heapSize && array[left] > array[largest]) {
                        largest = left;
                    }

                    if (right < heapSize && array[right] > array[largest]) {
                        largest = right;
                    }

                    if (largest !== i) {
                        swap(array, i, largest);
                        heapify (array, heapSize, largest);
                    }
                }


        
// SEARCHING ALGORITHMS

    // N.B; The search() methods we created in the data structures and algoritms are searching algorithms more so the BINARY SEARCH TREE search() methods. 

    // THE SEQUENTIAL/LINEAR SEARCH
        //This is the most inefficient and basic search algorithm that consist of comparing each element with the one we are looking for
                this.sequentialSearch = function (item) {
                    for (var i=0; i<array.length; i++) {
                        if (item === array[i]) {
                            return i;
                        }
                    }

                    return -1;
                }

    /* 
        THE BINARY SEARCH
            this works like a guessing game e.g someone can say, "I  think the number is between 1 and 10"

            to make the algorthm work, these steps have to be followed;
                1. A value is selected in the middle of the array
                2. if the item is the one we are looking for, we are done
                3. if the value we are looking for is less than the selected one, then we will go to the left and back to one (lower).
                4. if the value we are looking for is larger than the one selected, then we will go to the right and back to 1 (higher)

    */

    this.binarySearch = function (item) {
        this.quickSort ();

        var low = 0,
            high = array.length - 1;
            mid, 
            element;

        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            element = array[mid];

            if (element < item) {
                low = mid + 1;
            } else if (element > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    }



