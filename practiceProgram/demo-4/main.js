const express = require("express");

const router = express.Router();

router.get("/add-user", function(request, response){
    response.status(404).send("add user has been trigered");

});

router.post("/get-user", function(request, response){
    response.status(404).send("get user has been trigered")
});

module.export = router;