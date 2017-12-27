let mgclient = require('mongodb').MongoClient;

//初始化链接
let _connection = (url,callback)=>{
	mgclient.connect(url,(error,db)=>{
		if(error){
			return;
		}
		callback(error,db);
	});
};

//获取数据
exports.findlist = (collection,wherejson,callback)=>{
	let url = 'mongodb://127.0.0.1:27017/info';
	_connection(url,(error,db)=>{
		db.collection(collection).find(wherejson).toArray((error,result)=>{
			if(error){
				return;
			}
			callback(result);
			db.close();
		});
	});
};

//注入数据
exports.pushlist = (collection,jsondata,callback)=>{
	let url = 'mongodb://127.0.0.1:27017/info';
	_connection(url,(error,db)=>{
		db.collection(collection).insert(jsondata,(error,result)=>{
			if(error){
				return;
			}
			callback(result);
			db.close();
		});
	});
};


//修改数据
exports.updlist = (collection,wherejson,jsondata,callback)=>{
	let url = 'mongodb://127.0.0.1:27017/info';
	_connection(url,(error,db)=>{
		db.collection(collection).update(wherejson,jsondata,(error,result)=>{
			if(error){
				return;
			}
			callback(result);
			db.close();
		});
	});
};

//删除数据
exports.deletes = (collection,wherejson,callback)=>{
	let url = 'mongodb://127.0.0.1:27017/info';
	_connection(url,(error,db)=>{
		db.collection(collection).remove(wherejson,(error,result)=>{
			if(error){
				return;
			}
			callback(result);
			db.close();
		});
	});
};