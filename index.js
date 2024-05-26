// const fs = require("fs");

// //creating a new file.
// // fs.writeFileSync(`read.txt`,"welcome to my channel");
// // fs.writeFileSync(`read.txt`,"welcome to my channel Ravi");


// // fs.appendFileSync(`read.txt`," kjscnkjdbiclbjdc kjdkniwbc kxnc dsb ck");


// const buf_data =fs.readFileSync("read.txt");

// org_data=buf_data.toString();
// console.log(org_data);
// fs.renameSync("read.txt", "readwrite.txt")


const file=require("fs");
file.writeFileSync("read.txt","Ravi kumar ,hi ");

// let read=file.readFileSync("read.txt");
// console.log(read);
// let out=read.toString();
// console.log(out);
// const data=file.readFileSync("read.txt","utf8");
// console.log(data);
// let data =file.readFileSync("read.txt","utf-8");
// console.log(data);
//  file.unlinkSync("read.txt");
file.rmdirSync(`Ravi`);
