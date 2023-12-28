/* 
Write a script that demonstrates the difference between let and var 
in terms of block-scoping. Explain the results in comments.
*/

// Solution
function variableScoping() {
    if (true) {
      var varVariable = "I am a var";
      let letVariable = "I am a let";
    }
  
    console.log(varVariable); // Outputs: "I am a var"
    // console.log(letVariable); // Throws ReferenceError: letVariable is not defined
  }
  
  variableScoping();
  