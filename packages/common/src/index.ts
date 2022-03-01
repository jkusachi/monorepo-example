import isEven from "is-even";

function main() {
  console.log("This is the main");
}

export function sayHello() {
  console.log("I am saying Hello");
}

export function getName() {
  return "Lebron James " + isEven(1);
}

export function outputName(name: string) {
  return `${name.toUpperCase()} likes the Lakers`;
}

export default main;
