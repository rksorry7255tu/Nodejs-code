const fs=require("fs");


const bioData={
   name : "Ravi Kumar",
   age : 19,
   roll : "22wj1a05t4"
};

//convert normal object int JSON
const jsonData= JSON.stringify(bioData);
//creating a file
fs.writeFile("json1.json",jsonData,(error)=>{
   console.log(error);
});

//read file
fs.readFile("json1.json","utf-8",(err,data)=>{
  
   console.log(data);
   const orgData=JSON.parse(data);
   console.log(orgData);
});
