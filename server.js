var express=require('express');
var app=express();

app.get('/',function(req,res){

var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
var isWin = /^win/.test(process.platform);
var lang=req.headers['accept-language'].split(',')[0];


res.json({
    ipaddress: ip,
    software: lang
});
});




app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});