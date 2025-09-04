const express = require(`express`);

const app = express();
const path = require("path");
const portNumber = 3000;

app.set(`view engine`, `ejs`);
app.set("views", "./public");

app.use(express.static(path.join(__dirname, "public")));

app.get('/home', function (request, response) {
    response.setHeader("content-type", "text/html");
    response.status(200);
    response.render("home", {data: ["Banana", "Apple", "Orange", "Mango"]});
    
});


app.get('/about', function (request, response) {
    response.setHeader("content-type", "text/html");
    response.status(200);
    response.render("about", [data, "Banana", "Apple", "Orange", "Mango"]);
    
});

//app.use("", function(request, response))
app.listen(portNumber, function() {
    console.log("All files are running on port number 3000... ", portNumber)
});
