var bcrypt=require('bcrypt-nodejs')
var User=require("../models/user");
module.exports=function(router){
    router.post('/users',(req,res)=>{
        var user= new User();
        user.username=req.body.username;
        user.password=req.body.password;
        user.confirm_password=req.body.confirm_password;
        user.email=req.body.email;
        if (req.body.username==null|| req.body.username=="" || req.body.password==null||req.body.password==""||req.body.email==null||req.body.email=="" || req.body.confirm_password==null||req.body.confirm_password==""){
            res.json({success:false, message: "Ensure username,email,password and confirm password were provided"});
        }else if(req.body.password!=req.body.confirm_password){
            res.json({success:false,message:"passwords doesn't match!"});
        }
        else{
            user.save(function(err){
                if(err){res.json({success: false, message:"Username or email alreaddy exist!"});} 
                else{res.json({success: true, message: "user created!"});}
            });
        }
        
    });

    router.post('/authenticate',async (req,res)=>{
        
    let user = await User.findOne({ email: req.body.email});
    if (user == null) {
        return sendResponse(this.res, 400, FAILED_MSG, 'Incorrect id or password.');
        }

    let isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
    return sendResponse(this.res, 400, FAILED_MSG, 'Incorrect id or password.');
    }
        // // User.findOne({email: req.body.email}).exe(function(user){   
        //     console.log(req.body.email);
        //     const userLogin  = await User.findOne({email: req.body.email})
        //     if(userLogin){
        //         // //var validPassword=await bcrypt.compare(req.body.password,userLogin.password);
        //         // if(!validPassword){
        //         //     res.json({success: false, message: "Could not authenticate password"});
        //         // }else{
        //         //     res.json({success: true, message:"User authenticated"});
        //         // }
        //         res.json({message: "hello"});
        //         console.log(userLogin.email);
        //         console.log(userLogin.password);
        //         console.log(bcrypt.compare(req.body.password,userLogin.password));
                
        //     }else{
        //         res.json({success: false, message: 'Could not authenticate user'});
        //     }
        });
        

    return router;
}