let mongoClient = require("mongodb").MongoClient;
let connectinString = "mongodb://127.0.0.1:27017";
mongoClient.connect(connectinString)
.then((clientObj)=>{
    let database = clientObj.db("REACT_BACKEND");
    let category = {
        CategoryId: 4,
        CategoryName: 'Python'
    }
    database.collection("tblCategories").insertOne(category).then(()=>{
        console.log(`Record inserted !`)
    })
})
.catch((errorObj)=>{
    console.log(errorObj);
})