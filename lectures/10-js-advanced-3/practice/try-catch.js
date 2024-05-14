// Example 1

// try...catch only works for runtime errors
// For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript.
// It won’t work if the code is syntactically wrong, for instance it has unmatched curly braces:

// try {
//   console.log("Start of try runs"); // (1) <--

//   //   try...catch only works for runtime errors
//   // {{{{{{{{{{{

//   lalala; // error, variable is not defined!

//   console.log("End of try runs"); // (2) <--
// } catch (err) {
//   console.log("Catch is ignored, because there are no errors"); // (3)
// }

// Example 2

// setTimeout(function () {
//   try {
//     noSuchVariable; // script will die here
//   } catch (err) {
//     console.log("won't work");
//   }
// }, 1000);

// Example 3
// try...catch works synchronously

// try {
//   lalala; // error, variable is not defined!
// } catch (err) {
//   console.log(err.name); // ReferenceError
//   console.log(err.message); // lalala is not defined
//   console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

//   // Can also show an error as a whole
//   // The error is converted to string as "name: message"
//   console.log(err); // ReferenceError: lalala is not defined
// }

// Example 4

// let json = '{ "age": 30 }'; // incomplete data

// try {
//   let user = JSON.parse(json); // <-- no errors

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); // (*)
//   }

//   console.log(user.name);
// } catch (err) {
//   console.log(err instanceof SyntaxError);
//   console.log("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
// }

// Example 5

// Write example with try catch finally

try {
  console.log("Start of try runs"); // (1) <--

  //   lalala; // error, variable is not defined!
  throw "Error";

  console.log("End of try runs");
} catch (err) {
  console.log("Catch is ignored, because there are no errors");
} finally {
  console.log("Always runs");
}
