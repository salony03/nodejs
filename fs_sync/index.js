const fs = require ("fs");
// Creating a new file 
fs.writeFileSync("read.txt","Hello");
//adding more content to file
fs.appendFileSync("read.txt"," hello2")
//reading a file
const buf_data =fs.readFileSync("read.txt")
console.group(buf_data);