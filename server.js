var express=require('express');
var app=express();
var useragent=require('express-useragent'); 

app.get('/',function(req,res){
  var agent = useragent.parse(req.headers['user-agent']);


var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
var lang=req.headers['accept-language'].split(',')[0];


res.json({
    ipaddress: ip,
    language: lang,
    software: agent.os.family
   
    
});
});




app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});