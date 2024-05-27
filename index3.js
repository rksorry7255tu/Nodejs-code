//creating a folder 

 const file = require("fs");
file.mkdir("Ravi",(error)=>{
    console.log(error);
});

//creating a file inside it

file.writeFile("./Ravi/bio.txt","Hi!,I am Ravi kumar",(error)=>{
    console.log(error);
});

//to add more data at the end of the file

file.appendFile("./Ravi/bio.txt"," hello this is the appended data by the userrrr",(error)=>{
    console.log(error);
});


//read the data 

const data=file.readFile("./Ravi/bio.txt","utf-8",(error,data)=>{
    console.log(error);
    console.log(data);
});

//rename the file name as mybio.txt

file.rename("./Ravi/bio.txt","./Ravi/mybio.txt",(error)=>{
    console.log(error);
});

//delete both file and folder

file.unlink("./Ravi/mybio.txt",(error)=>{
    console.log(error);
});

//to delete folder

file.rmdir("./Ravi",(error)=>{
    console.log(error);
});



