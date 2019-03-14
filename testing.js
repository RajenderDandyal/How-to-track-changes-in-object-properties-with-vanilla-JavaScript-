
let onChange = require("./onChange");

let obj = {a: 1, b: 2, c: 3, d: 4};
let i = 0;
let objChanged = onChange(obj, function (path, value, previousValue) {
  console.log('Object changed:', ++i);
  console.log('this:', this);
  console.log('path:', path);
  console.log('value:', value);
  console.log('previousValue:', previousValue);
});

//obj.c = "i have changed c property";
// now work on objChanged to track changes on obj

objChanged.a = [1, 2, 4, 36, 4, 5];
objChanged.b = {apple: 1, mango: 3};

module.exports = obj;