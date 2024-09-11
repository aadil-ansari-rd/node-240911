const express = require('express');
const app = express();
const user = require('./routes/user');
console.log("index...")
app.use(user);




app.listen(4023, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server is running on 4023");
    }
})