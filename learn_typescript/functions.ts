function add(num1 : number, num2 : number) : number {
    return num1 + num2;
}
console.log(add(10, 14));

const subtract = (num1 : number, num2 : number) : number => num1 - num2;
console.log(subtract(12, 7));

const multiply = function(num1 : number, num2 : number) : number {
    return num1 * num2;
}
console.log(multiply(4, 8));

// Function with an optional parameter
function addMultipleNums(num1 : number, num2 : number, num3? : number) : number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(addMultipleNums(2, 5, 7));
console.log(addMultipleNums(1, 8));

// Function with an default parameter
function multiplyMultipleNums(num1 : number, num2 : number, num3 : number = 10) : number {
    return num3 ? num1 * num2 * num3 : num1 * num2;
}
console.log(multiplyMultipleNums(5, 3, 19));
console.log(multiplyMultipleNums(6, 4));

// Function with rest parameters
function concatenate(str1 : string, str2 : string, ...str3 : string[]) : string {
    return str1 + str2 + str3.reduce((s1, s2) => s1 + s2);
}
console.log(concatenate("one", "two", "three", "four", "five"));

// Function with generic parameters
function getItems<T>(items : T[]) : T[] {
    return Array<T>().concat(items);
}
console.log(getItems<number>([1, 2, 3, 4, 5]));
console.log(getItems<string>(["red", "blue", "green"]));
