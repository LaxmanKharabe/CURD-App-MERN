// Testing connection with MongoDB Server
/* =========================================*/
/* To communicate with MongoDB database, we have to import 
MongoClient class from mongodb module */
let mongoClient = require("mongodb").MongoClient;

/* We can connect with mongodb database server using the 
"connect()" method. Inside connect method is mongodb connection strig.
"connect()" is a promise which uses then(), catch() and finally()
synctax: mongoClient.connect("conncetionString").then(()={}).catch(()=>{}).finally(()=>{})
*/
mongoClient.connect("mongodb://127.0.0.1:27017")
.then((clientObj)=>{
/* After connecting with the mongodb database. There might be so many 
databases and collections. From them which database we want to use, this can handeled by clientObj object. */
console.log(`Connected successfully...`);
let database = clientObj.db("REACT_BACKEND");
database.collection("products").find({}).toArray().then((documents)=>{
    console.log(documents);
})

})
.catch((errorObj)=>{
    /* If conncetion faild then error object can return the errorObj object */
    console.log(errorObj);
})