// reading content of calc.js file
var fs= require('fs');

// if write a code to existing file will replace the entire content
// fs.writeFile('calc1.js','console.log("done")',function(err){
//     console.log("Data Saved");
// })

fs.appendFile('calc.js','console.log("done")',function(err){
    console.log("Data Saved");
})
