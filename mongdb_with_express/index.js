const express = require('express');
const app = express();
const Chat=require("./models/chat.js");
const mongoose = require('mongoose');
const port = 3000;
const path = require('path');

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
  console.log(allchat);
  res.send("working");
})

// Start the server
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
//create a model

