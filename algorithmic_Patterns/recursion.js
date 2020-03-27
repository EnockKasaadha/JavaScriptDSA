//recursion is a method to solve problems that consists of solving smaller portions of the problem until you solve a larger problem.

//recursion involves calling a function itself for example;
    function recursiveFunction(someParam) {
        recursiveFunction(someParam);
    };
    /*
        if we execute recursiveFunction, it will be executed indefinately. this is why a recursive function must have a BASE CASE (a condition in which no recursive call is made) to prevent infinite recursion.

        this is what is called a STACK OVERFLOW ERROR. the execution exceeds the maximum stack size
    */

//a function is also called recursive if it can call itself indirectly, as follows;
    function recursiveFunction1 (someParam) {
        recursiveFunction2 (someParam);
    };

    function recursiveFunction2(someParam) {
        recursiveFunction1 (someParam);
    };