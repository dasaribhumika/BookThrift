var mongoose=require('mongoose');
const { stringify } = require('nodemon/lib/utils');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt-nodejs')

var UserSchema = new Schema({
    username: {type: String, lowercase: true, required: true, unique:true },
    password: {type: String, required: true},
    confirm_password: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, unique:true}
});

UserSchema.pre("save",function(next){
    var user=this;
    bcrypt.hash(user.password,null,null,function(err,hash){
        if(err) return next(err);
        user.password=hash;
        next();
    })
    
})
UserSchema.pre("save",function(next){
    var user=this;
    bcrypt.hash(user.confirm_password,null,null,function(err,hash){
        if(err) return next(err);
        user.confirm_password=hash;
        next();
    });
    
});

UserSchema.methods.comparePassword=function(password){
    return bcrypt.compareSync(password,this.password);
};
module.exports = mongoose.model('User',UserSchema);