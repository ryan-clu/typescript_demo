"use strict";
/* Notes
tsc index (in console to target and compile this index.js file)
tsc --watch index
tsc --init
tsc (manual compile)
tsc --watch (auto compile)

-- in tsconfig.json --
"target"
"rootDir"
"outDir"
*/
// -- Basic (Primitive) Types --
let id = 88; // id = 'Ryan' (will throw out type error)
let person = 'ryan';
let isCool = true;
// console.log('ID:', id, 'Person:', person, 'Is cool?', isCool);
// -- Any Type --
let test = 'what?';
test = 'nope';
// console.log('TEST IS:', test);
// -- Arrays --
let odds = [1, 3, 5, 7, 9, 11];
let anyArr = [5, 'Colorado', true];
// odds.push('Hades');
// let odds: Number[] = [1,3,5,7,9,11, false];
// -- Tuple --
/* Can specify the exact types in each index position in the array. */
let tupleArr = [59, false, 'Buffalo Bills'];
// let tupleArrBad: [number, boolean, string] = [true, 25, 'Kansas City Chiefs'];
// -- Tuple Array --
let employees;
employees = [
    [1, 'Cynthia'],
    [2, 'Dale Cooper'],
    [3, 'Donald Draper'],
];
// console.log(employees)
// -- Unions --
/* If you want a particular variable to hold more than one type. */
let myID = 22;
myID = 'RLZF56';
myID = 35921;
// -- Enum --
/* Allow us to define a set of named constants. Numeric or string. */
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
// Up, Down, Left, Right are auto assigned values of 0, 1, 2, 3 respectively if not set to any values.
// if Up intially set to 1, then proceeding keys will be 2, 3, 4...
// console.log(Direction1.Down); (would log 6 in the console here...)
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// -- Objects --
// Method 1 - explicitly define type for user when defining the object
const user = {
    id: 899,
    name: 'Roger Sterling',
};
const CLU = {
    id: 999,
    name: 'Codified Likeness Utility',
};
// -- Type Assertion --
/* Explicitly tell the compiler that we want to treat an entity as a different type. */
// Method 1 - using brackets
let cId = 1;
let customerId = cId;
customerId = 465; // customerId = 'Todd' (will throw error...)
// Method 2 - using 'as'
let cid = 2;
let clientId = cid;
clientId = 'Todd';
/* ------------- */
// -- Functions --
/* Implict any type for parameters if not set. TSC will complain though. Can turn implicit any off in config. */
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(8, 3));
const multNum = (x, y) => {
    return x * y;
};
// console.log(multNum(8, 3));
// -- Void Type ---
/* You may not always have a return value. For when you may not expect a return. */
function log(message) {
    console.log(message);
}
const Tron = {
    id: 0,
    name: 'Tron',
    function: 'Protect users.',
};
let p1 = 1;
p1 = 'Joey';
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// no errors above... but should write it out;
const mult = (x, y) => x * y;
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered in the database.`;
    }
}
// const brad = new Person(11, 'brad', 30);
// const ryan = new Person(12, 'ryan', 28);
// console.log(brad, ryan);
// console.log(ryan.register());
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
// const empl = new Employee (6523, 'Rick Sanchez', 50, 'Scientist');
// console.log(empl)
// -- Generics --
/* used to build reusable components, <T> serves as a placeholder */
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Jack', 'John', 'Jill']);
// console.log(numArray)
numArray.push(1);
// strArray.push(1); ( will throw error )
