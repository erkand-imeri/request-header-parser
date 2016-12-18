var express=require('express');
var app=express();

app.get('/',function(req,res){

var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
var isWin = /^win/.test(process.platform);



res.json({
    ipaddress: ip,
    software: isWin
});
});




app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});