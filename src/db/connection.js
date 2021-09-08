const { MongoClient } =require("mongodb");
require ("dotenv").config()

const client =new MongoClient(process.env.MONGO_URI)

const connection=async(crudFunc, dataObj)=>{
    await client.connect();
    const db =client.db("movies");
    const collection =db.collection("movie")
 //   collection.insertOne({"name:S"})
    await crudFunc(collection, dataObj)

};

module.exports=connection;

