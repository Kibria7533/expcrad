const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

app.use(express.json());
 app.use('/',require('./routes/nameRoute'));


app.listen(5000,()=>{
    console.log('Server startted');
})