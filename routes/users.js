const express = require('express');
const router = express.Router();
const multer = require('multer');
const maria = require('../bin/maria');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) 
  }
});
const upload = multer({ storage: storage });
var  glob  = require ('glob');
var getDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};

router.get('/upload', function(req, res, next) {
  maria.query('select * from img_table', function (err, rows, fields) {
    if (!err) {
        if (rows[0]!=undefined) {
          return res.render('image', {
            results: rows    
          });
        } else {
           res.send('false');
        }
    } else {
      return  res.send('error : ' + err);
    }
});
});

router.post('/upload', upload.single('imgFile'), function(req, res){
  try{  
    var file =req.file['path'];
    var name = req.file['filename']
    console.log(req.file);
    console.log(name);
    console.log(file);
    maria.query('insert into img_table(filename,path,date) values (?,?,sysdate())',[name, file]), function(err, rows, fields) {      
        if(!err) {        
            res.json(true);        
        } else {
            console.log(err);
            res.json(false);
        }      
    };
} catch (e) {
    console.log(e);
    res.json(false);
}
res.json(true);
});

router.get('/testimage', function(req, res, next) {
  maria.query('select * from img_table;', function(err, rowf, fields) { 
      if(!err) { 
        for(var i =0; i<rowf.length; i++){
          rowf[i]['path'] = 'http://34.64.149.195:3000/'+ rowf[i]['path'];
        }
        res.json(rowf);

      } else { 
        console.log("err : " + err);
        res.send(err); 
      }
    });
  });

router.post('/testdate', function (req, res, next) {
  var date = req.body['date'];
  console.log(req.body);
  maria.query('select * from img_table where date=\'' + date + '\'', function (err, rows, fields) {
        if (!err) {
            if (rows[0]!=undefined) {
              for(var i =0; i<rows.length; i++){
                rows[i]['path'] = 'http://192.168.137.215:3000/'+ rows[i]['path'];
              }
              res.json(rows);
              console.log(rows);
            } else {
               res.json(false);
            }
        } else {
          return  res.send('error : ' + err);
        }
    });
});

router.get('/i', function(req, res, next) {
  maria.query('select * from img_table order by id desc limit 1;', function(err, rowd, fields) { 
      if(!err) { 
        res.json({rowd}); 
      } else { 
        console.log("err : " + err);
        res.send(err); 
      }
    });
  });


module.exports = router;
