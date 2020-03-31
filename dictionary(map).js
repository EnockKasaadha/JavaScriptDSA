/* 
    In a dictionary(or map), we store values in pairs as ([key, value]). 
    the key is used to find the particular element.
*/

// CREATING A DICTIONARY CLASS
function Dictionary () {
    var items = {};

    /**
     * we will need the following methods in our dictionary/map
        *  set(key, value) - this adds a new item to the dictionary.
        * delete(key) - this removes the value from the dictionary using the key
        * has(key) - this returns true if thet key exists in the dictionary and false otherwise
        * get(key) - this returns a specific value searched by the key
        * clear() - this removes all the items in the dictionary/map
        * size() - this returns how may elements the dictionary contains 
        * keys() - this returns an array of all the keys the dictionary contains
        * values() - this returns an array of all the values of the dictionary
     */

     // the has() method
     // we implement this method because it is used in other methods
        this.has = function (key) {
            return key in items;
        };

    //the set() method
        this.set = function (key, value) {
            items[key] = value;
        }

    //the delete() method
        this.delete = function (key) {
            if (this.has(key)) {
              delete items[key];
              
              return true;
            }

            return false;
        }


    // the get() method
        this.get = function (key) {
            return this.has(key) ? items[key] : undefined;
        };

    // the values() method
        this.values = function () {
            let values = [];
            for (var k in items) {
                if (this.has(k)) {
                    values.push(items[k]);
                }
            }

            return values;
        }

    // the clear() and size() methods are exactly the same as those of the Set class

    // the keys() class
        this.keys = function () {
            return Object.keys(items);
        }

    //getItems() method
        this.getItems = function () {
            return items;
        }
}