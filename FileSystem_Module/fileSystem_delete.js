// reading content of calc1.js file
var fs= require('fs');

// deleting  calc1

fs.unlink('calc1.js',function(err){
    console.log("Deleted File.");
})
