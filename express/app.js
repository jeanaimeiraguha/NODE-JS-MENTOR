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

// use window reload as js
app.get('/home/room' . (req, res)=>{
    res.send("This is IRAGUHA's room")
    //window.location.reload();
    //setTimeout(()=>{
        //window.location.reload()

    })
//})
// use of navigating routes using param
app.get('/home/room/:id' , (req ,res)=>{
    res.send("Data on id 123"  ,req.params.id);

})
app.get('/home/room/:id/:name' , (req ,res)=>{
    res.send("This is the name param" , req.params.name)

})

// lets post some data

app.post('/hoe-post' , (req , res)=>{
    res.send("This is the home page _yep POST is working normally")


})
// lets listen our app
app.listen(8080 , ()=>{
    console.log("my express ap is running on http://localhost:8080 ......")
})

