
// index.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Demo router is working!");
});

router.post('/', (req, res) => {
    res.json({
        message: "Demo POST route received",
        data: req.body
    });
});

const person = {
  firstName: "Virat",
  lastName: "Kohli",
  profession: "cricket",
  runs: "15000",
  city: "banglore"
};

fetch("http://localhost:3000/home", {
  method: "POST",
  body: JSON.stringify(person),
  headers: {
    "Content-Type": "application/json"
  }
})
  .then((httpResp) => {
    console.log(httpResp);
    return httpResp.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("Error fetched..", error);
  });


module.exports = router;


// main.js


const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Use external demo router
const demoRoutes = require('./demo/index');
app.use('/demo', demoRoutes);

// Sample GET route
app.get("/home", (req, res) => {
    res.status(200).json("Welcome to Node JS...");
});

// Sample POST route
app.post("/home", (req, res) => {
    res.status(200).json({
        body: req.body,
        headers: req.headers
    });
});

// Sample PUT route
app.put("/home", (req, res) => {
    res.status(200).json({
        body: req.body,
        headers: req.headers
    });
});

// PATCH
app.patch("/home", (req, res) => {
    res.status(200).json(req.body);
});

// DELETE
app.delete("/home", (req, res) => {
    res.status(200).json(req.body);
});

// Start the server
app.listen(port, () => {
    console.log("[>>>>>>] Server is running on port:", port);
});
