const shortid=require("shortid");
const URL=require("../model/url");

async function handleGenerateShortURL(req,res){
    const shortId=shortid(); 
    await URL.create({
        shortId:shortId,
        redirectURL:req.body.url
    })
    return res.json({id:shortId})
}

module.exports={handleGenerateShortURL};