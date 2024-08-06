const express = require('express');
const app = express();
const Chat=require("./models/chat.js");
const mongoose = require('mongoose');
const port = 2000;
const path = require('path');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

// Set the view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MongoDB connection
main().then(() => {
    console.log('Connection successful');
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp', {
     
    });
}
//inserting data in database
// let chat1=new Chat({
//     from:"nitin",
//     to:"piyush",
//     msg:"hii how are you",
//     create_at:new Date(),
// })
// chat1.save().then((res)=>{
//     console.log(res);
// }).catch(err=>{console.log(err)});

// Define a route
app.get('/', (req, res) => {
    res.send('Route is working');
});
//route to show all chats
app.get('/chats', async (req,res)=>{
  let allchat= await Chat.find();
//   console.log(allchat);
  res.render("index.ejs",{allchat});
})

// Start the server
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
app.get('/chats/new',(req,res)=>{
    res.render("new.ejs");

})
//create a route
app.post('/chats',(req,res)=>{
    let {from ,to,msg}=req.body;
    let newchat=new Chat({
        from : from,
        to:to,
        msg:msg,
        created_at:new Date()

    });
    console.log(newchat);
    newchat.save().then((res)=>{console.log(res)

    }).catch(err=>console.log(err));
    res.redirect("/chats");
})

