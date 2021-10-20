/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers1(a, b) {
    // code block
    return a + b;
}
let sum1 = addTwoNumbers1(1, 20);
console.log(sum1);

// Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => {
    // code block
    return a + b;
}
let sum2 = addTwoNumbers2(2, 20);
console.log(sum2);

// Single Line Arrow Function With Parameters

// const addTwoNumbers3 = (a, b) => (a + b); also valid

const addTwoNumbers3 = (a, b) => a + b;
let sum3 = addTwoNumbers2(3, 20);
console.log(sum3);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething("Helllo There!");

const sayHello = () => console.log('Hello!!!');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiple line string!
    </p>`
)

console.log(returnMultipleLines());
