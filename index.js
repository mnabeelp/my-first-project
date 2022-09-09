const people = ["Nabeel", "Mohd","Jack"];
const one = 1;
const str = "Hello World";
const b = true;
const person = {
    firstName: "Mohammed",
    lastName: "Nabeel",
}

function sayHello (person) {
    console.log("Hello " + person.firstName);
}

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log("-- instanceof --")