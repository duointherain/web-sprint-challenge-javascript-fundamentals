// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";
//function start
function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";
//nested function start
  function nestedFunction() {
    console.log(internal);
  };// kitchen function close
  nestedFunction(); // kitchen function runs, within the scope of the house function.
} // house function close
myFunction();

// Explanation: 
//The nested function is within the local scope of myFunction, like my kitchen can use the roof on my house. This can be really useful when we have to control when a function runs. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
