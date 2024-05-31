const EventEmitter = require("events"); 
const event = new EventEmitter();
event.on(`sayMyName`,(sc,msg)=>{
   console.log(`Your name is Ravi kumar`);
   console.log(`status code is ${sc} and msg is ${msg}`);

});


event.on(`age`,()=>{
   console.log("My age is 19");
});

event.on(`age`,()=>{
   console.log("My age is 17");
});

event.on(`age`,()=>{
   console.log("My age is 18");
});
event.emit("sayMyName",200,`ok`);
event.emit("age");
