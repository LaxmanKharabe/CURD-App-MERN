let mongoClient = require("mongodb").MongoClient;
let connectinString = "mongodb://127.0.0.1:27017";
mongoClient.connect(connectinString)
.then((clientObj)=>{
    let database = clientObj.db("REACT_BACKEND");
    database.collection("tblCategories").deleteOne({CategoryId: 4}).then(()=>{
        console.log(`Record Deleted!`)
    })
})
.catch((errorObj)=>{
    console.log(errorObj);
})