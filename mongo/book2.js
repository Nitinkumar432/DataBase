const mongoose=require("mongoose");
main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const  bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
       
    },
    category:{
        type:String,
        enum : ["fiction","non Fiction"],

    },
    list:{
        type:[String]
    }


})
//create book collections
const Book=mongoose.model("Book",bookSchema);

//store data in book collections

// let book1=new Book({
//     title:"math", 
//     author :"Rd verma",
//     category:"fiction",
//     list:["math","statics","graph"]

// })
// book1.save().then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));

Book.findByIdAndUpdate("66ad40c1dca958f0b27b4d74",{price:4000} ).then((res)=>{
    console.log(res);
}).catch(err=>console.log(err));