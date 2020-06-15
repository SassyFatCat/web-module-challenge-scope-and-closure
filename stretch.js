//### Task 3 - Stretch Goals

//After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

//See if you can complete one or more of the following challenges:

//1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

/*js
(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
*/
        //My predition: would be that since 'b' has not been declared we would get a reference error with regard to what 'var a' equals
        //The answer: 
                // 'a' is declared using var, which means that its lexical scope is only within the function, and it's value is set equal to 'b'
                // 'b' is a global variable since it is not preceded by any var/const/let, and it's value is equal to 3
                // So in the end both variables are declared and have a value, but the difference now is their scope

//2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

/*js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
*/
function createBase(number) {
    return function (add) {
        return add + number
    }
}

let addSix = createBase(6);

addSix(10); 


//3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!
/* General differences:
        FP separates data and processes while OOP combines data and processes 
        FP usually tries to leave original data untouched and return the results of processes on data, while OOP usually changes original data
        FP has more smaller proccesses that perform calculations, while OOP has large classes and objects that have the ability to do more things


    Specific to Functional Programming:
    - Data and processes are completely separate
    - Objects do not change
    - Pure functions
        - Repeated same input to a function will always return the same result
        - The returned results shouldn't rely on data outside their scope
        - The data that is used in functions is unchanged (in other words, the data is immutable), and the returned results are new arrays, new objects, new variables, etc
            - an example would be using .map instead of .forEach to alter data. .map will return a new array, while .forEach will presumably change the data in the original
    
    Specific to OOP:
    - Classes are used to create new objects. Objects can inherit attributes and methods of the creating Class
    - Objects have methods which will can change the data within the objects
    - Objects can use .this to change their own state

    In my experience I enjoy using Functional Programming more as it is easier to follow the path of processes and data, however OOP is less prone to less errors and bugs and seems easier to write
