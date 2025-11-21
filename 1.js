console.log("Javascript Code");

const fs=require('fs');
fs.writeFile("output.txt","Writing file", (err)=>{
    if(err) console.log("Error Occured");
    else console.log('File Written Successfully');
})

// repl: running js code for interactivity (read, evaluate, print, loop)
// console code in terminal as the code can be written in browser
