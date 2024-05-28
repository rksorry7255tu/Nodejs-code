const os= require("os");

//to know our system architecture
console.log(os.arch());

//to see freememory
console.log(os.freemem());

// memory in GB
console.log(`${os.freemem()/1024/1024/1024}`);

// to see totalmemory
console.log(`${os.totalmem()/1024/1024/1024}`);

//to know the host name
console.log(os.hostname());

//to know the platform
console.log(os.platform());

console.log(os.type());
