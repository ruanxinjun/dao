const mysql = require('mysql');

var startPool = (config)=>{
	return mysql.createPool({
		host:config.host,
		user:config.user,
		password:config.password,
		database:config.database,
		port:config.port,
		multipleStatements:config.multipleStatements
	});
};

var mysqldo = (config,sql,cb)=>{
		startPool(config).getConnection((error,connection)=>{
		if(error){
			cb(error,null);
			return;
		}
		connection.query(sql,(err,rows)=>{
			if(err){
				cb(err,null);
				return;
			}
			cb(null,rows);
		});
		connection.release();
	});
};

module.exports = mysqldo;

