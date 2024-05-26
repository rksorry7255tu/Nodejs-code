const file =require("fs");


//creating file in asynchronous way

file.writeFile("write.txt","hi this is write file",(error)=>{
    console.log(error);
});


// // // we are adding text to the existing file.

file.appendFile("write.txt"," in this file we are doing something masti",(error)=>{
    console.log(error);
})

//to read data
let data=file.readFile("write.txt","utf-8",(error,data)=>{
    console.log(data);

});
console.log(data);

// //to delete file

file.unlink("write.txt",(error)=>{
    console.log(error);
});

