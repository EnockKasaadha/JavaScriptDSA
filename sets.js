/* 
    A SET is a collection of items that are unordered and consists of unique elements (meaning they cannot be repeated)

    this data structure uses the same concepts as those of a finite mathematical set but applied to a computer sciece data structure

    //A MATH SET PERSPECTIVE 
        in mathematics, a set is a collection of disntict objects e.g, a set of natural numbers which can be;
            N = {0,1,2,3,4,5,6,...}
            The set list is surrounded by curly braces.

        a set with no element is called a NULL set or EMPTY set
*/

// IMPLEMENTING A SET
function Set() {
    let items = {}; // note that here we use curly  braces not square braces

    /* 
        //methods that are used include;
            add(value) - this adds a new item to the set.
            delete(value) - this removes teh value of the set.
            has(value) - returns true if a value exists in the set and false otherwise.
            clear() - removes all items from the list
            size() - returns how may elements are in the set
            values() - this returns an array of all the values of the set
    */

    // the has(value) method
        // we implement this method first because it is used in other mehods
        this.has = function(value) {
            return value in items; // the 'in" verifies that a given value is a property of the items object
        }

        // OR
        // a better way to implement this would be
            this.has = function(value) {
                return items.hasOwnProperty(value);
            }

    // the add() method
        this.add = function(value) {
            if (!this.has(value)) {
                items[value] = value;
                return true;
            }

            return false;
    }

    // the delete() method
    this.delete = function(value) {
        if (this.has(value)) {   // there is a parsing error on this code that needs to be fixed
            delete items[value];
            return true;
        }
        return false;
    }

    // clear() method
    // if we want to remove all the values from the set 
        this.clear = function () {
            items = {};
        }

    // the size() method
    // if we want to return the number of items in the set
        this.size = function () {
            return Object.keys(items).length;
        }

    // the values() method
    // if we want to return all the values that are in a set
        this.values = function () {
            let values = [];
            for (let i=0, keys=Object.keys(items); i<keys.length; i++) {
                values.push(items[keys[i]]);
            }

            return values;
        }
    ///////////////////////////////////////////////////

    /* 
        SET OPERATIONS
        we can perform the following operations on sets
            Union; given two sets, this returns a new set with elements from both the given sets
            Intersection; given two sets, this returns a new set with elements that exist in both sets
            Difference, Given two sets, this returns a new set with all the elements taht exist in the first set and do not exist in the second set
            subset; this confirms whether a given set is a subset of another set
    */

        // SET UNION
            this.union = function (otherSet) {
                let unionSet = new Set(); // first we create a new set

                // we then get the values from the first set
                let values = this.values();
                for (let i=0; i<values.length; i++) {
                    unionSet.add(values[i]);
                }

                // we also get the values from the second set
                values = otherSet.values();
                for (let i = 0; i < values.length; i++) {
                    unionSet.add(values[i]);
                    
                }

                return unionSet;
            }/////////////////////////////////////
            // let us get an example
                let setA = new Set;
                    setA.add(1);
                    setA.add(2);
                    setA.add(3);

                let setB = new Set();
                    setB.add(3);
                    setB.add(4);
                    setB.add(5);
                    setB.add(6);

                let unionAB = setA.union(setB);
                console.log(unionAB); // this outputs ['1', '2', '3', '4', '5', '6']. note that 3 appears once in the result 


        // SET INTERSECTION
        this.intersection = function (otherSet) {
            let intersectionSet = new Set();

            let values = this.values();
            for (let i=0; i<values.length; i++) {
                if (otherSet.has(values[i])) {
                    intersectionSet.add(values[i]);
                }
            }

            return intersectionSet;
        }

        // SET DIFFERENCE
        this.difference = function (otherSet) {
            let differenceSet = new set();

            let values = this.values();
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    differenceSet.add(values[i]);                    
                }    
            }
            return differenceSet;
        }

        //SUBSET
        this.subset = function (otherSet) {
            if (this.size() >otherSet.size) {
                return false;
            } else {
                let values = this.values();
                for (leti=0; i<values.length;) {
                    if (!otherSet.has(values[i])) {
                        return false;
                    }
                }

                return true;
            }
        }
}
