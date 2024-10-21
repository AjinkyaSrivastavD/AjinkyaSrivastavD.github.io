const express = require('express');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();

const mongoURI = 'mongodb+srv://ajinkyasrivastav:trainingmongo@cluster0.gfm2b.mongodb.net/';

mongoose.connect(mongoURI,{useNewUrlParser: true,useUnifiedTopology:true})
    .then(()=>{
        console.log('connected to mongoDB');
    })
    .catch((err)=>{
        console.error("error",err);
    });

app.get('/',(req,res)=>{
    res.send('Hello world mongooooo');
});

app.get('/api/users',(req,res)=>{
    const users = [
        {id:1,uname:'Ajinkya'},
        {id:2,uname:'Srivastav'}
    ]
    res.json(users);
})

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});
