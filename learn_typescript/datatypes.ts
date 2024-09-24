// Printing "Hello world!"
let hello_world_message : string;
hello_world_message = "Hello world!";

console.log(hello_world_message);

// Data types

// Number
let num: number = 200;
console.log(num)
num = 100;
console.log(num)

// Array of strings
let arr : string[];
arr = ["string1", "string2", "string3"];
console.log(arr);

// Boolean
let isValid : boolean = true;
console.log(isValid);

// Enum
enum Month {
    January,
    February,
    March
}
console.log(Month.January);
console.log(Month.February);
console.log(Month.March);

// Any
let anyVar : any;
anyVar = 10;
console.log(anyVar);
anyVar = "Random";
console.log(anyVar);
