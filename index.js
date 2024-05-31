const http=require("http");
const server=http.createServer((req,res)=>{
   res.end(`<h1>My name is Ravi Kumar</h1>`);
});
server.listen(8000,()=>{
   console.log("server working");
})
 

