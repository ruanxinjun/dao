var express = require("express");
var app = express();
var router = require("./router/");
var swig = require('swig');

//设置swig页面不缓存
swig.setDefaults({
  cache: false
});

app.set('view engine','html');
app.engine('html', swig.renderFile);

//get
app.get('/',router.index);

//insert
app.get('/insert',router.insert);

//update
app.get('/update',router.update);

//delete
app.get('/deletes',router.deletes);


app.listen(3000,'127.0.0.1');