var express = require('express');
var router = express.Router();
const maria = require('../bin/maria');


router.get('/charts', function(req, res, next) {
  res.render('charts');
});

router.get('/join', function(req, res, next) {
  res.render('join');
});
router.get('/opening', function(req, res, next) {
  res.render('opening');
});
router.get('/main', function(req, res, next) {
  res.render('main');
});
router.get('/cctv', function(req, res, next) {
  res.render('cctv');
});
router.get('/calendar', function(req, res, next) {
  res.render('calendar');
});
router.get('/section1', function(req, res, next) {
  res.render('section1');
});
router.get('/raspscreen', function(req, res, next) {
  res.render('raspscreen');
});





router.get('/section1chart', function(req, res, next) {
  maria.query('select * from temphum order by id desc', function (err, rows, fields) {
  if (!err) {
    if (rows[0]!=undefined) {
      res.render('section1chart',{
        results : rows
      });
    }
      else {
         res.json(false);
      }
  } else {
    return  res.send('error : ' + err);
  }
});
});

router.get('/section2chart', function(req, res, next) {
  maria.query('select * from temphum order by id desc', function (err, rows, fields) {
  if (!err) {
    if (rows[0]!=undefined) {
      res.render('section2chart',{
        results : rows
      });
    }
      else {
         res.json(false);
      }
  } else {
    return  res.send('error : ' + err);
  }
});
});


router.post('/join', function(req, res, next) {
  try{
      var body = req.body;       
      maria.query('INSERT INTO user(id, password, name,email) values (?,?,?,?)',[ body.id, body.password, body.name, body.email]), function(err, rows, fields) {
          
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
  res.redirect('/login');
});


router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function (req, res, next) {
  var id = req.body['id'];
  var password = req.body['password'];
  console.log(req.body);
  maria.query('select * from user where id=\'' + id + '\' and password=\'' + password + '\'', function (err, rows, fields) {
      if (!err) {
          if (rows[0]!=undefined) {
             res.redirect("/main");
          } else {
             res.redirect("/login");
          }
      } else {
        return  res.send('error : ' + err);
      }
  });
});





module.exports = router;
