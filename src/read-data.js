
let mongoClient = require("mongodb").MongoClient;
let conStr = "mongodb://127.0.0.1:27017";

mongoClient.connect(conStr).then((clientObject)=>{
    let database = clientObject.db("REACT_BACKEND");

    // Read all documents from the products collection who have the id as 4.
    database.collection("products").find({id:4}).toArray().then((doc)=>console.log(doc))

    // Read all documents from the products collection
    database.collection("products").find({}).toArray().then((doc)=>console.log(doc))
})
