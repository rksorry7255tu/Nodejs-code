const path =require("path");
//to know directory name
console.log(path.dirname(`C:/Users/Ravi/Documents/NODEJS with vsCode/index.js`));
//to know extention name
console.log(path.extname(`C:/Users/Ravi/Documents/NODEJS with vsCode/index.js`));
//to find file name
console.log(path.basename(`C:/Users/Ravi/Documents/NODEJS with vsCode/index.js`));
//
// console.log(path.join(`C:/Users/Ravi/Documents/NODEJS with vsCode/index.js`));
const mypath=path.parse(`C:/Users/Ravi/Documents/NODEJS with vsCode/index.js`);
console.log(mypath.root);
console.log(mypath.name);