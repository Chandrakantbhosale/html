const express = require("express");
const app = express();

const portNumber = 3000;
const utility = require("./utility");
// 30/07/2025

// app.get("/", function(request, response){
//     utility.eventEmit.emit("Welcome");

//     utility.eventEmit.removeAllListeners("Welcome");
//     //utility.eventEmit.off("Welcome", utility.welcomeOne);
//    // utility.eventEmit.off("Welcome", utility.welcomeTwo);
    
//     utility.eventEmit.emit("Welcome");
//     response.status(200).send("Hello ");
// })

// 31/07/2025


app.get("/home", function(request, response){
    response.status(200);
    response.send("Welcome ot NodeJS...");
    
});

app.put("/home", function(request, response){
    response.status(200).send("PUT method is running");
});

app.patch("/home", function(request, response){
    response.status(200).send("PAtch method is running...");
});

app.delete("/home", function(request, response){

    response.status(200).send("delete method is running...");
});

app.post("/home", function(request, response){
    response.status(201).send("Welcome ot POST method in the NodeJS...s");
});

app.use( function(request, response){
    console.log("without route change it");
})
app.listen(portNumber, () => {
    console.log("[>>>>] app is running in port", portNumber);
})