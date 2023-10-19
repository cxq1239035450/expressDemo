const router = require('express').Router();

router.get('/index',function(req, res, next) {
    console.log(req.query,req.body);
    res.send('用户信息')
})
router.post('/edit',function(req, res, next) {
    console.log(req.query,req.body);
    res.send('用户信息')
})
router.post('/add',function(req, res, next) {
    console.log(req.query,req.body);
    res.send('用户信息')
})
module.exports = router