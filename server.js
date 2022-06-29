var express=require('express');
var app=express();
var port=process.env.PORT || 8080;
var morgan=require('morgan');
var mangoose=require('mongoose');
const { default: mongoose } = require('mongoose');
var bodyParser=require('body-parser');
var router=express.Router();
var appRoutes=require("./app/routes/api")(router);
var path=require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));
app.use('/api',appRoutes);

mongoose.connect('mongodb://localhost:27017/test',function(err){
    if (err){
        console.log("not connected: "+ err);
    }
    else{
        console.log("connected!")
    }
});


app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+"/public/app/index.html"));
});
app.listen(port, function(){
    console.log('hello on port '+port);
});