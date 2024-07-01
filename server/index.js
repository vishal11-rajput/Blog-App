const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs');
const Post = require('./models/PostModel')
const app = express();


 const salt = bcrypt.genSaltSync(10);
 const secret = 'askafjaoerigjlmdklgjlaere'

app.use(cors({credentials: true, origin:'http://localhost:5173' }));
app.use(express.json())
app.use(cookieParser())

mongoose.connect('mongodb+srv://vishalofficial787:6N2tleuRONV5Lrkf@cluster0.qbo6kk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', console.log('MongoDb connected'))


//for register
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

//for login
app.post('/login', async (req,res)=>{
    const {username, password} = req.body;
    try{
        const userInfo = await UserModel.findOne({username});
        // res.json(userLogin);
        const passOk = bcrypt.compareSync(password, userInfo.password)
        // res.json(passOk)
        if (passOk){
            //login success
            jwt.sign({username, id:userInfo._id}, secret, {}, (err, token)=>{
                if (err) throw err;
                res.cookie('token', token).json({
                    id: userInfo._id,
                    username, 
                })
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


app.get('/profile', async(req,res)=>{
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info)=>{
        if (err) throw err;
        res.json(info);
    })
})
 
//for logout
app.post('/logout', (req,res)=>{
    res.cookie('token', '' ).json('ok')
})

app.post ('/post', upload.single('file'),async(req,res)=>{
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path,newPath);

    const {title, summary, content} = req.body;
    const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath
    })

    res.json(postDoc);
})

app.get('/post', async (req,res)=>{
    const posts = await Post.find();
    res.json(posts)
})

app.listen('4000', console.log('server running on port 4000'))

//