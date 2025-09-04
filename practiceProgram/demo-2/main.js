
//  GET, POST, PUT, PATCH, DELETE method

 const express = require("express");

const app = express();

const cors =require("cors");
const port = 3000;


const router = express.Router("./");

app.use(cors());

app.use(express.json());

// app.get("/home", function(request, response){
//     response.status(201).send("Hello Welcome to Node JS");
// });


// app.post("/home", function(request, response){
//response.status(200).json("hello jksjjkj")
//      response.status(200).json(request.body);
//      response.status(201).json(request.header);
// });

// app.put("/home", function(request, response)
// {
//     response.status(200).json(request.body);
// });

// app.patch("/home", function(request, response){
//     response.status(200).json(request.body);
// });

// app.delete("/home", function(request, response){
//     response.status(200).send(request.body);
// });


// router.get("/home", function(request, response){
// response.status(200).send("Hello Welcome to GET method");
//  });

 
// router.post("/home", function(request, response){
// response.status(200).send("Hello Welcome to POST method");
//  });

 
// router.patch("/home", function(request, response){
// response.status(200).send("Hello Welcome to PATCH method");
//  });

 
// router.put("/home", function(request, response){
// response.status(200).send("Hello Welcome to PUT method");
//  });

 
// router.delete("/home", function(request, response){
// response.status(200).send("Hello Welcome to Delete method");
//  });



const person = {
    "firstName" : "Virat",
    "lastName" : "Kohli",
    "profession" : "cricket",
    "runs" : "15000",
    "city" : "banglore"
}


fetch("http://localhost:3000/home",{
    method : "POST",

    body : JSON.stringify(person),
    headers : {"content-type": "application/json"},

} ).then(function(httpResp){
  console.log(httpResp)
  return httpResp.json();
}).then(function(response){
  console.log(response);
}).catch(function(error){
  console.log(error);
});



//  const person = {
//     "firstName" : "Virat",
//     "lastName" : "Kohli",
//     "profession" : "cricket",
//     "runs" : "15000",
//     "city" : "banglore"
// }


// fetch("http://localhost:3000/get-user",{
//     method : "POST",

//     body : JSON.stringify(person),
//     headers : {"content-type": "application/json"},

// } ).then(function(httpResp){
//   console.log(httpResp)
//   return httpResp.json();
// }).then(function(response){
//   console.log(response);
// }).catch(function(error){
//   console.log(error)
// })


router.use(`api/module/user`, router);

router.use(function (request, response){
    response.status(404).json("this router such not found...")
});

 app.use(router);

app.listen(port, () => {
    console.log("[>>>>>>] Data is available in the Port :", port);
});
