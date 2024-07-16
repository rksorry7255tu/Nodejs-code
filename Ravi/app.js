const express = require("express");
const app = express();
app.get(`/`, (req, res) => {
    res.send("i am Ravi");
});

app.get("./sendemail",sendMail)


const start = async () => {
    try {
        app.listen(5000, () => {
            console.log("i am live in port no 5000");
        })
    }
    catch(error){}
};
start();