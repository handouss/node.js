const fs=require ('fs');
console.log('before');
fs.readFile('./file.txt','utf-8',(err,data)=>{console.log(data)});

console.log('after');