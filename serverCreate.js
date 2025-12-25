// modules: 1) inbuilt 2) created by us.
// createServer is a function existed in http module

// including a module
var http= require('http');

http.createServer(function(req,res){

    //headers 
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("Welcome Back Yashvi");
    res.end(); // it is necessary to include end as if not added it expects more strings in sequence after this
   // or to include only one statement directlly write res.end("")
// need to mention port number to listen to
}).listen(8081);// create server and has two parameters 1) which we receive from client  2) which we want to send to client
