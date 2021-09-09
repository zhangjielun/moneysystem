var express = require('express');
var router = express.Router();
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination(req,res,cb){
      cb(null,path.resolve(__dirname, '..')+'/uploads');
    },
    filename(req,file,cb){  
      cb(null,Date.now() + file.originalname);
    }
  });
  const upload = multer({storage});

router.post('/',upload.single('file'),  (req, res) => {
  console.log(req.file);
  
    const file = req.file
    file.url = `http://localhost:3030/uploads/${file.filename}`
    res.send(file)
})



module.exports = router;

