var db = require('../models/');

exports.index = (request,response,next)=>{
	db.findlist('info','news',{},function(msg){
		response.render('index.html',{msg});
	});
};

exports.insert = (request,response,next)=>{
	db.pushlist('info','news',{"name":"rxj","salary":"20K"},function(msg){
		response.json(msg);
	});
};

exports.update = (request,response,next)=>{
	db.updlist('info','news',{"name":"rxj"},{$set:{"salary":"40k"}},function(msg){
		response.json(msg);
	});
};

exports.deletes = (request,response,next)=>{
	db.deletes('info','news',{"name":"rxj"},function(msg){
		response.json(msg);
	});
};
