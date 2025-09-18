
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


 const userRoutes = require("./module/user");
app.use("/module/user", userRoutes);

module.export = router;


