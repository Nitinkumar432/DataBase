const { faker } = require('@faker-js/faker');

//require sql2 package to connect sql to node 
const mysql=require("mysql2");
const express=require("express");
const app=express();
app.set("view engine","ejs");
const path=require("path");
app.set("views",path.join(__dirname,"/views"));


const connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"delta_app",
    password:"nitin@123"
});
// let q="SHOW TABLES";

//inserting new data
// let q="INSERT INTO user(id,username,email,password) VALUES?";
// let user=[["123b","123_newuserb","abc@gmaibl.com","abbc"],
//         ["1232","123_newuser@2","abc@gmail.com2","abc2"]];
let  getrandomuser = ()=>  {
    return [
       faker.string.uuid(),
       faker.internet.userName(),
       faker.internet.email(),
      faker.internet.password()
    ];
      

};
// let data=[];
// for(let i=0;i<100;i++){
//     data.push(getrandomuser());//hunderead random user;

// }



//pushng multiple data
// try{
//     //pushing 100 randome user data in sql data [data] push multiple data in one time if we push single we need data in array in one row
// connection.query(q,[data],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//     // console.log(result[0]);
//     // console.log(result[1]);
// })
// }catch(err){
//     console.log(err);
// }

let port =8080
app.listen(port,()=>{
    console.log(`listening at port number ${port}`);
})
//get / fetch & show total number of user on our app
app.get("/",(req,res)=>{
    let q=`SELECT COUNT(*) FROM user`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count=result[0]["COUNT(*)"];
            // let count=result[0]["count(*)"];
            res.render("home.ejs",{count});

        })
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});
//get/user  fetch & show (useid,username,email) of all users
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    connection.query(q, (err, users) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Some error occurred");
        }
        console.log(users);
      
        res.render("users.ejs",{users}); // Send the result as a JSON response
    });
});
//create our routes
//get/user/:id/edit
//to get form to edit the username based on id
// //this form will require a password
// edit router
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`select * from user where id='${id}'`;
    res.render("edit.ejs",{id})


})


//PATCH/user:/:id
// to edit  username if correct password was enetered in form
// connection.end();


















//   console.log(getrandomuser());



//pushing single data
//pushing single data:'
// let q="INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";
// let d=["2001","nitinp","nitin@gmail.com","nk@123"];
// try{
    //pushing single  randome user data in sql data [data] push multiple data in one time if we push single we need data in array in one row
// connection.query(q,d,(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//     // console.log(result[0]);
//     // console.log(result[1]);
// })
// }catch(err){
//     console.log(err);
// }