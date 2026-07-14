const fs = require("fs");
fs.writeFile("output.txt" , "Hello world!", (err) =>{
    if(err){
        console.log("Error occured while writing file.", err);
    }
    console.log("Written successfully.")
    fs.readFile("output.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    console.log("File contents:");
    console.log(data);
    });
})