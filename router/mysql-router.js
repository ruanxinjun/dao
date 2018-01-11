const mysqldo = require('../models/mysqls.js');

var sqlconfig = {
	host:'127.0.0.1',
	user:'root',
	password:'123456',
	database:'info',
	port:3306,
	multipleStatements: true
}


exports.index = (req,res,next)=>{
	mysqldo(sqlconfig,'select * from users',(error,rows)=>{
		if(error){
			res.send(error);
			return;
		}
		res.render('index-mysql',{rows});
	});
};