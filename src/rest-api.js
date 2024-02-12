const express = require("express");
const mongoCLient = require("mongodb").MongoClient;
const conStr = "mongodb://localhost:27017";
const app = express();

app.get("/", (req, res)=>{
    res.send(`<h1>Home</h1>
    <a href="/user/1/laxman">User</a> |
    <a href="/admin">Admin</a> |
    <a href="/cat">Categories</a>
    
    `)
});

app.get("/admin", (req,res)=>{
    res.send(`<h1>Admin</h1>`)
});
app.get("/user/:id/:name", (req,res)=>{
    res.send(
    `<h1>User</h1>
    <p>User ID: ${req.params.id}</p>
    <p>User Name: ${req.params.name}</p>`
    )
});


app.get("/cat", (req, res)=>{
    mongoCLient.connect(conStr).then((obj)=>{
        let database = obj.db("REACT_BACKEND");
        database.collection("products").find({}).toArray().then((doc)=>{
            res.send(doc);
            res.end();
        })
    })
});
app.listen(4000, ()=>{
    console.log("Server is listennig...")
});

