const file=require("fs");

//creating a txt file and writing text.
file.writeFileSync("read.txt","hello i am ravi ");

//append some text to the same file
file.appendFileSync("read.txt","welcome to my github link");

//rename file 
// file.renameSync("read.txt","read1.txt");

// //read data from file in the buffer datatype.
let data=file.readFileSync("read1.txt");
// console.log(data);

// obtain the buffer data into string
let strdata=data.toString();
console.log(strdata);

//read data directly in original form
const data1=file.readFileSync("read1.txt","utf-8");
console.log(data1);

// to delete file 
//file.unlinkSync("index1.js");