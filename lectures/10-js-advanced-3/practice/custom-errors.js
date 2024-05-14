class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }

  return user;
}

// Working example with try..catch

try {
  let user = readUser('{rerewr "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Invalid data: " + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) {
    // (*)
    console.log("JSON Syntax Error: " + err.message);
  } else {
    throw err; // unknown error, rethrow it (**)
  }
}
