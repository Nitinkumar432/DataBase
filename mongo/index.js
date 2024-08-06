const mongoose = require('mongoose');
//help to connect with mongodb database
//27017 is default mongodb database port number;
// mongoose.connect("mongodb://127.0.0.1:27017/test");
//connection connection to mongodb database using mongoose
main().then((res)=>{

    console.log("connection successfull",res);

})
.catch(err=>console.log(err));
//create asynchronous function to connect with database
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
//create schema of collection like need of requirements
const userSchema=new mongoose.Schema({
    name:String,
    email : String,
    age : Number
})
//creating collection name as user with pass userschema
const User=mongoose.model("User",userSchema);
// const Employee=mongoose.model("Employee",userSchema);

//inserting single data in database

// const user2=new User({name :"mrigendra",
//                     email:"mrigendra@gmail.com",
//                     age:26

// });                           
// user2.save().then((res)=>{
//     console.log(res);

// }).catch(err=>console.log(err));


//inserting multiple data in single time
// User.insertMany([
//     {name:"aargya",email:"aargrya@gmail.com",age:24},
//     {name:"rishabh",email:"rishabh@gmail.com",age:21},  
//     {name:"dahiya",email:"harsh@gmail.com",age:44}
// ]).then((data)=>{
//     console.log(data);
// });

//finding all data name of dahiya
// User.find({name :"dahiya"}).then((res)=>{
//     console.log(res);
// }).catch(err=>(console.log(err)));


//finding conditional data
// User.find({age:{$gt:40}}).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));

//finding data on byh thier id using findOne
// User.findOne({_id:"66acd89640fbebb8628eb3b7"}).then((res)=>{
//     console.log(res[0].name,res[0].age);
// }).then(err=>console.log(err));

//finding data on byh thier id using findById
// User.findById("66acd89640fbebb8628eb3b7").then((res)=>{
//     console.log(res);
// }).then(err=>console.log(err));

//update use dahiya age with 21
// User.updateOne({name:"dahiya"},{age:21}).then((res)=>{
//     console.log(res);
// }).then(err=>console.log(err));

//update many where age>=20 replace age with 40;
// User.updateMany({age:{$gt:20}},{age:40}).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));.


//findOneandUpdate()
// User.findOneAndUpdate({name:"nitin"},{age:50},{new : true}).then((res)=>{
//     console.log(res);
// }).then(err=>console.log(err));


//delete the data which name is dahiya
User.deleteOne({name :"dahiya"}).then((res)=>{
    console.log(res);
}).catch(err=>console.log(err));
// User.find().then((res)=>{
//     console.log(res);
// }).then(err=>console.log(err));
