const http = require ('http')
let Port = 3000;
let Server = http.createServer((req,res)=>{
    res.end('Hello, World!\n');
})
Server.listen(Port,()=>{
    console.log(`Serevr Started at ${Port}`)
})
