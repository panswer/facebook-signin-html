const dotenv=require('dotenv');
const path=require('path');
const fs=require('fs');

const pathENV=path.resolve(__dirname,'../.env');

if(!fs.existsSync(pathENV)){
    console.log(`The .env file is not find`);
    console.log(pathENV);
    process.exit(1);
}

dotenv.config({
    path:pathENV
});

const required=[
    'SERVER_PORT'
].map(key=>{
    if(!process.env[key]){
        return key;
    }else{
        return undefined;
    }
}).filter(key=>Boolean(key));


if(required.length>0){
    console.log(`It's required the fields ${required.join(', ')} in .env file`);
    process.exit(1);
}