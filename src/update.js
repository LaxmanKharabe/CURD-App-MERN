let mongoClient = require("mongodb").MongoClient;
let connectinString = "mongodb://127.0.0.1:27017";
mongoClient.connect(connectinString)
.then((clientObj)=>{
    let database = clientObj.db("REACT_BACKEND");
    database.collection("tblCategories").updateOne({CategoryId: 4}, {$set: {CategoryName: "Python course"}}).then(()=>{
        console.log(`Record Updated!`)
    })
})
.catch((errorObj)=>{
    console.log(errorObj);
})
