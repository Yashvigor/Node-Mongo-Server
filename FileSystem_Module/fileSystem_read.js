// reading content of calc.js file
var fs= require('fs');

// for not stopping the file reading so for that we write a callback function.
fs.readFile('calc.js','utf8',function(err,data){
    console.log(data);
})
