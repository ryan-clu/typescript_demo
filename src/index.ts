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
let test: any = 'what?'
test = 'nope';
// console.log('TEST IS:', test);

// -- Arrays --
let odds: number[] = [1,3,5,7,9,11];
let anyArr: any[] = [5, 'Colorado', true]; 
// odds.push('Hades');
// let odds: Number[] = [1,3,5,7,9,11, false];


// -- Tuple --
let tupleArr: [number, boolean, string] = [59, false, 'Buffalo Bills'];
// Can specify the exact types in each index position in the array.
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
// If you want a particular variable to hold more than one type.
let myID: string | number = 22;
myID = 'RLZF56';
myID = 35921;

// -- Enum --
// Allow us to define a set of named constants.
