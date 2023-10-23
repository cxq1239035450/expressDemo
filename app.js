var express = require('express');
var bodyParser = require('body-parser');
const user = require('./router/user')
const upload = require('./router/upload')
const fs = require('fs')
var app = express();


// 因为body传递方式为流式 使用插件优化
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const publicFn = (rej,res,next)=>{
    const {ip} = rej
    const url = __dirname +'/log/ip.txt'
    fs.appendFileSync(url,`${ip} ${new Date()}\n`)
    next()
}
app.use(publicFn)
// 导出所有public文件
app.use(express.static(__dirname + '/public'));
app.use('/user',user)
app.use('/upload',upload)

app.get('/',(rej,res)=>{
    res.send('hello world')
})
app.post('/',(rej,res)=>{
    res.send('hello post')
})
app.put('/',(rej,res)=>{
    res.send('hello put')
})
app.all('*',(rej,res,next)=>{
    res.send('404 not serve')
})
app.listen(80,()=>{
    console.log('启动服务成功');
})