

const express = require("express");

const app = express();
const port = 3000;

const cors =require("cors");
app.use(cors());

app.use(express.json());



app.get("/home", function(request, response){
    response.status(200).json("Well come to Node JS...")
});

app.post("/home", function(request, response){
    response.status(200).json(request.body);
    response.status(201).json(request.headers);
});

app.put("/home", function(request, response){
    response.status(200).json(request.body);
    response.status(200).json(request.headers);
});

app.patch("/home", function(request, response){
    response.status(200).json(request.body);
});

app.delete("/home", function(request, response){
    response.status(200).json(request.body);
});


//const demoRouter = require('../../demo-5/module/user', router);
//router.use("../../module/user");
//app.use(router);
// router.use(function (request, response){
//     response.status(404).send("this router such not found...")
// });

const router = express.Router();


app.listen(port, () => {
    console.log("[>>>>>>] Data is available in the Port :", port);
});

//module.exports = router;
// app.listen(port, () =>{
//     console.log("[>>>>>>>>], Data will be route in the : ", port);
// });

// const express = require("express");
// const cors = require("cors");

// const app = express();
// const port = 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get("/home", (req, res) => {
//     res.status(200).json("Welcome to Node JS...");
// });

// app.post("/home", (req, res) => {
//     res.status(200).json({
//         body: req.body,
//         headers: req.headers
//     });
// });

// app.put("/home", (req, res) => {
//     res.status(200).json({
//         body: req.body,
//         headers: req.headers
//     });
// });

// app.patch("/home", (req, res) => {
//     res.status(200).json(req.body);
// });

// app.delete("/home", (req, res) => {
//     res.status(200).json(req.body);
// });

// // Router usage example (if you want to use routes from another module)
// const router = express.Router();
// // Example nested route (can be extended)
// router.get("/", (req, res) => {
//     res.send("User module root");
// });
// app.use("/demo-5/module", router);

// // 404 Handler
// app.use((req, res) => {
//     res.status(404).send("This route was not found...");
// });

// // Start server
// app.listen(port, () => {
//     console.log("[>>>>>>] Data is available on Port:", port);
// });
