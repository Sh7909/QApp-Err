const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');
const fun=require('./mongo1.js');
const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017', { dbName: "Quote_App" }).then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log(err);
    })  
}
//
connectDB();
const Schema = mongoose.Schema;
const userSchema = new Schema({
    eid1:String,
    pass1: String,
});
const Colorinfo=new Schema({
    post:String,
    color:String,
    date:String,
    
})
userSchema.plugin(passportLocalMongoose);

const model1=mongoose.model("Userdetails", userSchema);
const model2=mongoose.model("Colorinfo",Colorinfo);
module.exports={model1,model2};
fun;