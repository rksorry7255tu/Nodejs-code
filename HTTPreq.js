// const http=require("http");

// const server=http.createServer((req,res)=>{

//    if(req.url=="/"){
//       res.end(`<h1>Ravi ,your first website</h1>`);
//    }else if(req.url=="/about"){
//       res.end(`<h1>hello from about sides</h1>`);
//    }else if(req.url=="/ravi"){
//       res.end(`<h1>hello from Ravi sides</h1>`);
//    }else{
//        res.writeHead(404,{"Content-type" : "text/html"});
//       res.end(`404 error pages. Page does not exist`);
//    }
  
// });
// server.listen(800,()=>{
//    console.log("server working");
// });

 const http=require("http");
 const server=http.createServer((req,res)=>{
   res.end(`<h1>Ravi </h1>`);

 });
 server.listen(3000,()=>{
   console.log("server is responding");

 });


