const fs = require("fs");
fs.writeFile("output.txt" , "Hello world!", (err) =>{
    if(err){
        console.log("Error occured while writing file.", err);
    }
    console.log("Written successfully.")
})