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
    }