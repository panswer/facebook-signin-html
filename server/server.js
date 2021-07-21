const express =require('express');
const cors=require('cors');
const path=require('path');
const fs=require('fs');

const app =express();

/* 
    Config
*/
// basic
require('./config');
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// static files
const pathPUBLIC=path.resolve(__dirname,'../public');
if(!fs.existsSync(pathPUBLIC)){
    console.log("It's required a public folder");
    process.exit(1);
}
app.use(express.static(pathPUBLIC));
// api routes
app.use('/api',require('./routes/index'));

module.exports=app;