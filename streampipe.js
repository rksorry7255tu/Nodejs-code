
const fs = require("fs");
const http = require("http");
const server= http.createServer();
server.on(`request`,(req,res)=>{
  
    // fs.readFile(`input.txt`,(error,data)=>{
    //   res.end(data.toString());
    // });
    // const rstream = fs.createReadStream(`input.txt`);
    //  rstream.on(`data`,(chunkdata)=>{
    //      res.write(chunkdata);
    //  });
    //  rstream.on("end",()=>{
    //      res.end();
    //  });
    //  rstream.on("error",()=>{
    //      console.log(error);
    //  })

    const rstream = fs.createReadStream(`input.txt`);
    rstream.pipe(res);
});
server.listen(3000);