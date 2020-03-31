/**
 * HASHING consists of finding a value in a data strcture in the shortest time possible.
 * when we are getting a value from a hashmap, we must know its position, we do not need to iterate through all the values.
 * A HASH FUNCTION is a function that, fiven a key, eill retun an address in the table where the value is.
 */

// CREATING A HASH TABLE
    function HashTable () {
        var table = [];
        
        /**
         * we will implement three basic methods for every class
         *      put(key, value) - this adds a new item to the has table. it can also update it 
         *      remove(key) - this removes the value from the hast table using the key
         *      get(key) - this returns a specific value searched by the key
        */

        // first we implement the hash function which is important in hashing
        // this hash function uses the a number based on the sum of each charASCII value that composes key.
        var loseloseHashCode = function (key) {
            var hash = 0;
            for (let i=0; i<key.length; i++) {
                hash += key.charCodeAt(i);
            };

            return hash % 37;
        };

        // the push() method
        this.put = function (key, value) {
            //find a postion in the table using the hash function we created
            var position = loseloseHashCode(key); 
            console.log(position + '-' + key);
            // add the value parameter to the position
            table[position] = value;
        }

        // the remove() method
        this.remove = function (key) {
            table[loseloseHashCode(key)] = undefined;
        }

        // the print() method
        this.print = function () {
            for (var i = 0; i<table.length; ++i) {
                if (table[i] !== undefined) {
                    console.log(i + ": " + table[i]);
                }
            }
        }

        // the ValuePair() class helper function
        var ValuePair = function (key, value) {
            this.key = key;
            this.value = value;
        }

        // the toString() method
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }

        // the put() method
        this.put = function (key, value) {
            var position = loseloseHashCode(key);

            if (table[position] == undefined) {
            table[position] = new LinkedList();
            }

            table[position].append(new ValuePair(key, value));
        }

        // the get() method
        this.get = function (key) {
            var position = loseloseHashCode(key);

            if (table[position] !== undefined) {
                // iterate the linked list to find value/key
                var current = table[position].getHead();

                while (current.next) {
                    if (current.element.key === key) {
                        return current.element.value;
                    }

                    current = current.next;
                }

                // check in case first or last element
                if (current.element.key === key) {
                    return current.element.value;
                }
            }

            return undefined;
        }

        // the remove() method
        this.remove = function (key) {
            var position = loseloseHashCode(key);

            if (table[position] !== undefined) {
                var current = table[position].getHead();

                while (current.next) {
                    if (current.element.key === key) {
                        table[position].remove(current.element);
                        if (table[position].isEmpty()) {
                        table[position] = undefined;                              
                        }

                        return true;
                    }

                    current = current.next;
                }

                // check in case first or last element
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }

                    return true;

                }
            }

            return false;
        }
    }