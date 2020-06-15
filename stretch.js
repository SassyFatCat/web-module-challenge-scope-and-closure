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
