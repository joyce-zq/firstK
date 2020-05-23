var myexpress =  require("express");  //引入express框架资源
var ws = require('ws').Server;

var app = myexpress(); //执行express的全局函数，返回一个express的对象
app.set("port",9999); //键/值对的方式

   //express 进行配置
   // __dirname:这是一个全局变量，返回就是当前文件的一个目录
  app.use(myexpress.static(__dirname+"/public"));//静态资源文件的路径


app.listen(app.get("port"));


var cons = new Array();
var server = new ws({host:"172.16.8.29",port:8888});
server.on('connection',function(ws){
    console.log('new connection founded successfully');
    cons.push(ws);
    ws.on('message',function(data){
        var jsonobj = JSON.parse(data);
        jsonobj.online = cons.length;
        data = JSON.stringify(jsonobj);
        for(var i=0;i<cons.length;i++){
            cons[i].send(data);
            console.log("接收到数据："+data);
        }
    });
    ws.on('close',function(){
        for(var i=0;i<cons.length;i++){
            if(cons[i] == ws) cons.splice(i,1);
        }
    });
});