const express = require("express");


const router = express.Router();

router.get("/get-user", function(request, response){
    response.status(404).json("add user has been trigered");

});

router.post("/get-user", function(request, response){
    response.status(404).json("get user has been trigered");
});

module.export = router;