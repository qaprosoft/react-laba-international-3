// Named exports: This is useful when you want to export multiple things from a module.

const name = "GitHub";
function sayHello() {
  console.log("Hello, world!");
}

// Default exports: This is useful when a module only exports one thing, like a function or a class.
export default function sayGoodbye() {
  console.log("Goodbye, world!");
}

// Renaming imports: If you want to import something under a different name, you can do so with the as keyword.
export const test = "Gitlab";

export { name, sayHello };
