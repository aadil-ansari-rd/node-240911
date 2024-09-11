const users = require('../users.json');
const fs = require('fs');


function getAllUsers(req, res) {
    try {
        res.json(users);
    } catch (err) {
        console.log(err)
    }
}

function getUser(req,res){
    try{
        let id = parseInt(req.params.id);
        let user = users.find((user)=> user.id === id);
        console.log(user, 'user');
        res.json(user);

    }catch(err){
        console.log(err);
    }
}

function addUser(req, res){
    try{
        req.body.id= users.length +1;
        users.push(req.body);
        fs.writeFile('users.json', JSON.stringify(users), (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("File has been written successfully")
                res.end("user added ");
            }
        })
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    getAllUsers ,
    getUser,
    addUser
}