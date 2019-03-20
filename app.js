const express=require('express');
const hbs=require('hbs');

var app=express();

app.set('view engine','hbs');

app.get('/',(req,res)=>{

res.render('index.hbs');


});

app.get('/home',(req,res)=>{

    res.send("Welcome to my homepage");
    
    
    });

app.get('/contact',(req,res)=>{

    res.send("<h1>Welcome to my contact page</h1>");
        
        
    });    

app.listen(3000);