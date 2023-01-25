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
let id: number = 88; // id = 'Ryan' (will throw out type error)
let person: string = 'ryan';
let isCool: boolean = true;
// console.log('ID:', id, 'Person:', person, 'Is cool?', isCool);

// -- Any Type --
let test: any = 'what?';
test = 'nope';
// console.log('TEST IS:', test);

// -- Arrays --
let odds: number[] = [1, 3, 5, 7, 9, 11];
let anyArr: any[] = [5, 'Colorado', true];
// odds.push('Hades');
// let odds: Number[] = [1,3,5,7,9,11, false];

// -- Tuple --
/* Can specify the exact types in each index position in the array. */
let tupleArr: [number, boolean, string] = [59, false, 'Buffalo Bills'];
// let tupleArrBad: [number, boolean, string] = [true, 25, 'Kansas City Chiefs'];

// -- Tuple Array --
let employees: [number, string][];

employees = [
  [1, 'Cynthia'],
  [2, 'Dale Cooper'],
  [3, 'Donald Draper'],
];
// console.log(employees)

// -- Unions --
/* If you want a particular variable to hold more than one type. */
let myID: string | number = 22;
myID = 'RLZF56';
myID = 35921;

// -- Enum --
/* Allow us to define a set of named constants. Numeric or string. */
enum Direction1 {
  Up = 5,
  Down,
  Left,
  Right,
}
// Up, Down, Left, Right are auto assigned values of 0, 1, 2, 3 respectively if not set to any values.
// if Up intially set to 1, then proceeding keys will be 2, 3, 4...
// console.log(Direction1.Down); (would log 6 in the console here...)

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// -- Objects --
// Method 1 - explicitly define type for user when defining the object
const user: {
  id: number;
  name: string;
} = {
  id: 899,
  name: 'Roger Sterling',
};
// Method 2 - set the type beforehand
type User = {
  id: number;
  name: string;
};

const CLU: User = {
  id: 999,
  name: 'Codified Likeness Utility',
};

// -- Type Assertion --
/* Explicitly tell the compiler that we want to treat an entity as a different type. */
// Method 1 - using brackets
let cId: any = 1;
let customerId = <number>cId;
customerId = 465; // customerId = 'Todd' (will throw error...)
// Method 2 - using 'as'
let cid: any = 2;
let clientId = cid as string;
clientId = 'Todd';

/* ------------- */

// -- Functions --
/* Implict any type for parameters if not set. TSC will complain though. Can turn implicit any off in config. */
function addNum(x: number, y: number): number {
  return x + y;
}
// console.log(addNum(8, 3));

const multNum = (x: number, y: number): number => {
  return x * y;
};
// console.log(multNum(8, 3));

// -- Void Type ---
/* You may not always have a return value. For when you may not expect a return. */
function log(message: string | number): void {
  console.log(message);
}

/* ------------- */

// -- Interfaces --
/* Like a custom type or a specific structure to an object or a function. */
// '?' denotes that value for that key/property is OPTIONAL.
// 'readonly' in front of a key/property means that it can't be reassigned.

interface UserInterface {
  readonly id: number;
  name: string;
  function: string;
  numOfCycles?: number;
}

const Tron: UserInterface = {
  id: 0,
  name: 'Tron',
  function: 'Protect users.',
};

// -- Interfaces vs Types for Objects & other data types --
/*
- preferably use 'interface' over 'type' for objects. 
- 'type' can be used for primitives and unions.
- for objects & functions use interface!!!
*/

type Point = number | string;
let p1: Point = 1;
p1 = 'Joey';
// cannot use an interface here, will throw error

interface mathFunc {
  (x: number, y: number): number;
}

const add: mathFunc = (x, y) => x + y;
const sub: mathFunc = (x, y) => x - y;
// no errors above... but should write it out;
const mult: mathFunc = (x: number, y: number): number => x * y;
// const div: mathFunc = (x: number, y: string): number => x * y; ( will throw error b/c can't accept string param )

/* ------------- */

// -- Classes --
/*
- Introduced and have been around since ES6. Classes used to create objects. 
ex. class in vanilla JS

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };
};

Data Modifiers or Access Modifiers
- Public, Private, Protected
- Properties are Public by default. (No need to explicitly state Public)
- Private only accessible within class. Can't be reassigned, can't console log.
- Protected only accessible within class or extensions. 

Interfaces with a Class
- Can implement an interface with a class.
- 'implements' keyword
*/

interface PersonInterface {
  id: number;
  name: string;
  age: number;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  public name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
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
  position: string;

  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age);
    this.position = position;
  }
}

// const empl = new Employee (6523, 'Rick Sanchez', 50, 'Scientist');
// console.log(empl)

// -- Generics --
/* used to build reusable components, <T> serves as a placeholder */

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['Jack', 'John', 'Jill']);

// console.log(numArray)
numArray.push(1);
// strArray.push(1); ( will throw error )