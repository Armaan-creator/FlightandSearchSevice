const express=require('express');
const{Port}=require('./config/serverConfig');

const app=express();

const ServerProvider=async ()=>{
    app.listen(Port,()=>{
        console.log(`Server is Started at ${Port}`);
    })
}
ServerProvider();