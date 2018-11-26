var exp = require('express');
var bingo = require ('bingo-extract');
var app=exp();
app.get('/extract',function(req,res){
res.json({message:'This is a numbers extract : ' + bingo.extract() });
})
app.listen(3001);
