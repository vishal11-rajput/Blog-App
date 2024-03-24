const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();


 const salt = bcrypt.genSaltSync(10);
 const secret = 'askafjaoerigjlmdklgjlaere'

app.use(cors({credentials: true, origin:'http://localhost:5173' }));
app.use(express.json())

mongoose.connect('mongodb+srv://vishalofficial787:6N2tleuRONV5Lrkf@cluster0.qbo6kk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', console.log('MongoDb connected'))

app.post('/register', async (req,res)=>{
    const {username, password}= req.body;
    try{
        const userInfo = await UserModel.create({
            username,
            password: bcrypt.hashSync(password,salt),
        })
        res.json(userInfo);
    }
    catch(err){
        res.status(400).json(err)
    }
    
})

app.post('/login', async (req,res)=>{
    const {username, password} = req.body
    try{
        const userInfo = await UserModel.findOne({username});
        // res.json(userLogin);
        const passOk = bcrypt.compareSync(password, userInfo.password)
        // res.json(passOk)
        if (passOk){
            //login success
            jwt.sign({username, id:userInfo._id}, secret, {}, (err, token)=>{
                if (err) throw err;
                res.cookie('token', token).json('okie')
            } )
        }
        else{
            res.status(400).json('wrong password')
        }

    }
    catch(err){
        console.log(err),
        res.status(400).json(err)
    }
})

app.listen('4000', console.log('server running on port 4000'))

//