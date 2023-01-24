"use strict";
/* Notes
tsc index (in console to target and compile this index.js file)
tsc --watch index
tsc --init
tsc (manual compile)
tsc --watch (auto compile)

in tsconfig.json
"target"
"rootDir"
"outDir"
*/
let id = 5;
// id = 'Ryan' (will throw out type error)
console.log('ID:', id);
let person = 'ryan';
console.log(person);
