var fs = require("fs");
var readStream = fs.createReadStream("./1.txt")
var length =0;

readStream.on("data",(chunks)=>{
    length ++
    console.log(chunks.toString())
})
readStream.on("end",()=>{
    console.log(length)
})