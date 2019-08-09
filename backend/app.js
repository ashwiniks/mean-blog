const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postModel = require('./models/post');
const userRoutes= require('./routes/user');
const app = express();
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/blog").then(()=>{
console.log("connected");
}).catch((err)=>{
console.log(err);
});
app.use(cors());

//register user routes here
///api/auth/signup
app.use("/api/auth",userRoutes);

app.post('/api/posts',(req,res,next)=>{
    let title = req.body.title;
    let conttent = req.body.content;
    const postData = new postModel({title:title ,content:conttent});
    postData.save().then((result)=>{
     $message = {"message": "data inserted success"}
     res.status(201).json($message)
    }).catch((err)=>{
       console.log(err);
    });

});
app.delete('/api/posts/:id',(req,res,next)=>{
    postModel.deleteOne({_id : req.params.id }).then(()=>{
        $message = {"message": "data delete success"};
        res.status(200).json($message);
    })
    console.log(req.params.id);
    });
/*
get posts 
*/

app.use('/api/posts',(req,res,next)=>{
    posts=[];
    postModel.find({},{"title":1,"content":1,_id:1}).sort({title:-1}).then(
        (result)=>{
            res.status(200).json(result);
        }
    );
   
    
    });

   


module.exports = app;