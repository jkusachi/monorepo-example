import commonFunction, { sayHello, getName, outputName } from "@demo/common";
commonFunction();

sayHello();

console.log("this is in server.js " + getName());

console.log(outputName("Chris Day"));
