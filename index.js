const express=require("express");
const mongoose=require("mongoose");
const app=express();
const urlRoute=require("./routes/url");
const URL=require("./model/url")

mongoose.connect("mongodb://127.0.0.1:27017/short-url" )
 .then(()=>{console.log("Connected to MongoDB")})

app.use(express.json())

app.use("/url",urlRoute)

app.get("/:shortid",async (req,res)=>{
    const shortid=req.params.shortid;
    const entry= await URL.find({shortId:shortid})
    const link=entry[0].redirectURL
    res.redirect(link);
})

app.listen(3000,()=>{
    console.log("Listening to port 3000")
})