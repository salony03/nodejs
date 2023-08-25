const fs = require("fs")
fs.writeFile("read.txt","Hello3",(err)=>{
    console.log("file is created")
    console.log(err);
});
fs.appendFile("read.txt","Hello4",(err) => {

    console.log("Data appended");
    console.log(err)
  });
  fs.readFile("read.txt","UTF-8",(err, data)=>{
    console.log(data)
  })
  