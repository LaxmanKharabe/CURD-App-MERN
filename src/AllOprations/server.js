const express = require('express');
const cors = require('cors');
const mongoCLient = require('mongodb').MongoClient;


const app = express();
const conStr = 'mongodb://localhost:27017';

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/insert', (req,res)=>{
    const cate = {
        CategoryId: parseInt(req.body.CategoryId),
        CategoryName: req.body.CategoryName
    };

    mongoCLient.connect(conStr).then((clientObj)=>{
        let database = clientObj.db('REACT_BACKEND');
        database.collection('tblCategories').insertOne(cate).then(()=>{
            console.log('record insterted');
            res.end();
        })
    })
});
app.listen(2000, (err)=>{
    if(!err){
        console.log('server listening')
    }else{
        console.log(err);
    }
})