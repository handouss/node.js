const http=require('http');
const server = http.createServer((req,res)=>{
    res.write('<h1>HELLO NODE !!!!!!</h1>');
    res.end();
});

server.listen(3000,(err)=>{
    if (err) console.log(err)
    else console.log('server is running on port 3000');
})