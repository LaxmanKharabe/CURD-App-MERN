const express = require("express");
const mongoCLient = require("mongodb").MongoClient;
const conStr = "mongodb://localhost:27017";
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`<h1>Home</h1>`)
});

app.get("/cat/:id", (req, res) => {
    mongoCLient.connect(conStr).then((obj) => {
        let database = obj.db("REACT_BACKEND");
        database.collection("products").find({}).toArray().then((doc) => {
            res.send(doc);
            res.end();
        })
    })
});

app.post("/insert", (req, res) => {
    let cate = {
        "categoryId": categoryId,
        "CategoryName": req.body.CategoryName
    };
    let categoryId = Number(req.body.categoryId);

    if (!Number.isInteger(categoryId)) {
        res.status(400).send("categoryId must be a valid integer");
        return;
    }
    mongoCLient.connect(conStr).then((obj) => {
        let database = obj.db("REACT_BACKEND");
        database.collection("tblCategories").insertOne(cate).then(() => {
            console.log("Record inserted...!");
            res.redirect("/cat/4");
            res.end();
        });
    })
})
// Listen on 4100
app.listen(4100, () => {
    console.log("Server is listennig...")
});