const mongoose = require('mongoose');
const Chat=require("./models/chat.js")
main().then(() => {
    console.log('Connection successful');
}).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp', {
     
    });
}
//model
// const Chat = mongoose.model('Chat', chatSchema);
let chats = [
    {
        from: "nitin",
        to: "patel",
        msg: 'Hello friend',
        created_at: new Date()
    },
    {
        from: "patel",
        to: "nitin",
        msg: 'Hi Nitin! How are you?',
        created_at: new Date()
    },
    {
        from: "nitin",
        to: "anu",
        msg: 'Hey Anu, are you coming to the party?',
        created_at: new Date()
    },
    {
        from: "anu",
        to: "nitin",
        msg: 'Yes, I will be there!',
        created_at: new Date()
    },
    {
        from: "manish",
        to: "patel",
        msg: 'Don’t forget to finish the report.',
        created_at: new Date()
    },
    {
        from: "patel",
        to: "manish",
        msg: 'Thanks for the reminder!',
        created_at: new Date()
    }
];

Chat.insertMany(chats);