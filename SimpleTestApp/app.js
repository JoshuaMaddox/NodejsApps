var express = require("express");
var app = express();

// ============ROUTES============

app.get("/", function(req, res){
   res.send("Hi and Welcome to Eduku. Ready to make things better?");
});

app.get("/teachers/:subjects", function(req, res) {
    var subjects = req.params.subjects;
    if(subjects === "maths") {
        res.send("Here will be the maths page");
    } else if(subjects === "science") {
        res.send("Here will be the science page");
    } else if(subjects === "geography") {
        res.send("Here will be the geography page");
    } else {
        res.send("Sorry, We don't yet have any " + subjects + " items yet.");
    }
});

app.get("/:repeat/:number", function(req, res){
    var repeat = req.params.repeat;
    var number = req.params.number;
    var newRepeat = "";
    if(number > 1) {
        for(var i = 0; i < number; i++) {
            newRepeat += (" " + repeat);
        }
        return res.send(newRepeat);
    }
    res.send(repeat); 
});

app.get("*", function(req, res){
   res.send("Sorry, page not found...but you can register your email for an amazing cause at http://www.eduku.org"); 
});

//Tell Express to Listen for Requests

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});