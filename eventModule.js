const EventEmitter = require("events"); 
const event = new EventEmitter();
event.on(`sayMyName`,()=>{
   console.log(`Your name is Ravi kumar`);
});
event.emit("sayMyName");