const express = require('express');
// express comes from a third party server(npm)

//start express and get every function of express
const app= express(); //express handler


// handling requests through routers 
app.get('/',function(req,res){
    res.send("HELLO YASHVI"); // for browser
    console.log("HELLO YASHVI"); // for console
})

// app.get('/alien',function(req,res){
//     res.send("WELCOME ALIEN");
// }) // for different urls

app.get('/alien',function(req,res){
    const id= req.query.id;
    res.send("WELCOME ALIEN "+id);
}) // for query strings


// app.get('/alien/20', function(req,res){
//     res.send("HEY YASHVI");
// })
app.get('/alien/:id', function(req,res){
    const id=req.params.id;
    res.send("HEY YASHVI " +id);
}) // id: placeholder


// start server
app.listen(9000,function(req,res){
    console.log("Running");
});
