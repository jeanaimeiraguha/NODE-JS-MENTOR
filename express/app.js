const express = require('express')
const app =express()
const connect = require('connect');
const things = require('./things')
app.get('/' ,(req , res)=>{
    res.json({code:200 , message:'OK _ success'})
    res.json({code:404, message:'Not Found'})
    res.json({code:403, message:'Forbidden'})
})
app.get('/home' , (req , res)=>{
    res.send('Hello Node js dev')
    res.Write('Hello This is body')

})
//this is the use of middle ware

app.all('/home/room' ,(req , res , next)=>{
    res.send*("This is home page")
next();
})
