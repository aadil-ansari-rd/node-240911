const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller')

router.use(express.json())   // Most important to use this for POST

router.get('/users', (req, res)=>{
    usercontroller.getAllUsers(req,res);
})

router.get('/user/:id', (req, res)=>{
    usercontroller.getUser(req,res);
})
 
router.post('/add/user', (req, res)=>{
    usercontroller.addUser(req, res);
})
router.put('/edit/user/:id', (req,res)=>{
    usercontroller.editUser(req, res);
})
router.delete('/delete/user/:id',(req,res)=>{
    usercontroller.deleteUser(req, res);
})
module.exports = router ;