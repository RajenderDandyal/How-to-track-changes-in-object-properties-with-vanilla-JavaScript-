let obj = require("./testing");
let onChange = require("./onChange");


let i = 0;
let objChange = onChange(obj, function (path, value, previousValue) {
  console.log('Object changed:', ++i);
  console.log('this:', this);
  console.log('path:', path);
  console.log('value:', value);
  console.log('previousValue:', previousValue);
});

objChange.a = "a changed";