const router = require('express').Router()
const multer  = require('multer')

//磁盘存储引擎可以让你控制文件的存储。
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname); // 修改文件名后可以在请求中file查看到
  }
});
const upload = multer({dest:'uploads/',limits:{
    fileSize:1024*20*1024
},storage})

function fileFilter (req, file, cb) {
  // 这个函数应该调用 `cb` 用boolean值来
  // 指示是否应接受该文件

  // 拒绝这个文件，使用`false`，像这样:
  cb(null, false)

  // 接受这个文件，使用`true`，像这样:
  cb(null, true)
  // 如果有问题，你可以总是这样发送一个错误:
  cb(new Error('I don\'t have a clue!'))

}


router.post('/index',upload.single('file'),(req,res,next)=>{
    console.log(res);
    res.send('成功')
})

module.exports = router