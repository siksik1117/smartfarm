var express = require('express');
var router = express.Router();
const multer = require('multer');
const maria = require('../bin/maria');

router.get('/auto1', function(req, res, next) {
  maria.query('UPDATE button SET auto =\''+1+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/auto2', function(req, res, next) {
  maria.query('UPDATE button SET auto =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/auto3', function(req, res, next) {
  maria.query('UPDATE button SET auto =\''+1+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});

router.get('/auto4', function(req, res, next) {
  maria.query('UPDATE button SET auto =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});

router.get('/stop', function(req, res, next) {
  maria.query('UPDATE button SET up =\''+0+'\',down =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/up', function(req, res, next) {
  maria.query('UPDATE button SET up =\''+1+'\',down =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/down', function(req, res, next) {
  maria.query('UPDATE button SET down =\''+1+'\',up =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/stop1', function(req, res, next) {
  maria.query('UPDATE button SET up =\''+0+'\',down =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});

router.get('/up1', function(req, res, next) {
  maria.query('UPDATE button SET up =\''+1+'\',down =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});

router.get('/down1', function(req, res, next) {
  maria.query('UPDATE button SET down =\''+1+'\',up =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});


router.get('/wm', function(req, res, next) {
  maria.query('UPDATE control SET wm =\''+1+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/wm1', function(req, res, next) {
  maria.query('UPDATE control SET wm =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/led', function(req, res, next) {
  maria.query('UPDATE control SET led =\''+1+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/led1', function(req, res, next) {
  maria.query('UPDATE control SET led =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/fan', function(req, res, next) {
  maria.query('UPDATE control SET fan =\''+1+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/fan1', function(req, res, next) {
  maria.query('UPDATE control SET fan =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('main'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('main'); 
});

router.get('/wm2', function(req, res, next) {
  maria.query('UPDATE control SET wm =\''+1+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});

router.get('/wm3', function(req, res, next) {
  maria.query('UPDATE control SET wm =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});

router.get('/led2', function(req, res, next) {
  maria.query('UPDATE control SET led =\''+1+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});

router.get('/led3', function(req, res, next) {
  maria.query('UPDATE control SET led =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});

router.get('/fan2', function(req, res, next) {
  maria.query('UPDATE control SET fan =\''+1+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});

router.get('/fan3', function(req, res, next) {
  maria.query('UPDATE control SET fan =\''+0+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.redirect('raspscreen'); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.redirect('raspscreen'); 
});


router.get('/control', function(req, res, next) {
  maria.query('select * from control;', function(err, rows, fields) { 
    if(!err) { 
      res.json({rows});
       
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  });
});


router.get('/temphum', function(req, res, next) {
  maria.query('select * from temphum;', function(err, rows, fields) { 
      if(!err) { 
        res.json({rows});
         
      } else { 
        console.log("err : " + err);
        res.send(err); 
      }
    });
  });

router.get('/temp1', function(req, res, next) {
  var rowz = [];
  var z = 0;
  function getTimeStamp() {

    var d = new Date();
    var s = d.getFullYear()+'-'+(d.getMonth()+1) +'-'+d.getDate()
       
    return s;
}
  var today = getTimeStamp() ;
  maria.query('select * from temphum where date1=\'' + today + '\'', function (err, rows, fields) {
    if (!err) {
      if (rows[0]!=undefined) {
        for(var i =0; i<rows.length; i=i+6){
          rowz[z] = rows[i];
          z++;
        }
        res.json({rowz});
      }
        else {
           res.json(false);
        }
    } else {
      return  res.send('error : ' + err);
    }
});
});

router.post('/temp', function (req, res, next) {
    var date = req.body['date'];
    console.log(req.body);
    var z = 0;
    var rowt = [];
    maria.query('select * from temphum where date1=\'' + date + '\'', function (err, rows, fields) {
        if (!err) {
          if (rows[0]!=undefined) {
            for(var i =0; i<rows.length; i=i+6){
              rowt[z] = rows[i];
              z++;
            }
            res.json({rowt});
            console.log({rowt});
          }
            else {
               res.json(false);
            }
        } else {
          return  res.send('error : ' + err);
        }
    });
});

router.post('/temphum', function(req, res, next) {
    var body = req.body;
    console.log(req.body);
    maria.query('INSERT INTO temphum(temp, hum, soiltemp, soilhum, co2, date1, date2) values (?,?, ?, ?,?, curdate(),sysdate())',[body.temp, body.hum,'27', body.soil, body.co2]), function (err, rows, fields) {
        if (!err) {
            res.json(true);
        } else {
          res.json(false);
        }
    }
});

router.get('/testtemp', function(req, res, next) {
  maria.query('select * from temphum order by id desc limit 1;', function(err, rowd, fields) { 
      if(!err) { 
        res.json({rowd}); 
      } else { 
        console.log("err : " + err);
        res.send(err); 
      }
    });
  });

router.get('/temp2', function(req, res, next) {
  maria.query('select * from temphum limit 87;', function(err, rowg, fields) { 
      if(!err) { 
        res.json({rowg}); 
      } else { 
        console.log("err : " + err);
        res.send(err); 
      }
    });
  });


router.get('/wind', function(req, res, next) {
  maria.query('select * from wind;', function(err, rowa, fields) { 
      if(!err) { 
        res.json({rowa}); 
      } else { 
        console.log("err : " + err);
        res.send(err); 
      }
    });
  });

router.get('/sun', function(req, res, next) {
  maria.query('select * from sun;', function(err, rowz, fields) { 
      if(!err) { 
        res.json({rowz}); 
      } else { 
        console.log("err : " + err);
        res.send(err); 
      }
    });
  });


router.get('/button', function(req, res, next) {
    maria.query('select * from button;', function(err, rowf, fields) { 
        if(!err) { 
          res.json({rowf}); 
        } else { 
          console.log("err : " + err);
          res.send(err); 
        }
      });
    });
  

router.post('/volt', function(req, res, next) {
  var body = req.body;
  console.log(req.body);
  maria.query('INSERT INTO voltage(volt) values (?)',[body.volt]), function (err, rows, fields) {
      if (!err) {
          res.json(true);
      } else {
        res.json(false);
      }
  }
});

router.post('/wind', function(req, res, next) {
  var ws = req.body['ws'];
  console.log(req.body);
  if (ws <= 0.5){
    ws =0;
  }
  maria.query('UPDATE wind SET ws =\''+ws+'\',date = sysdate() WHERE id=\''+1+'\''), function (err, rows, fields) {
      if (!err) {
          res.json(true);
      } else {
        res.json(false);
      }
  } 
  res.json(true);
});

router.post('/rain', function(req, res, next) {
  var be = req.body['be'];
  console.log(req.body);
  maria.query('UPDATE sun SET be =\''+be+'\',date = sysdate() WHERE id=\''+1+'\''), function (err, rows, fields) {
      if (!err) {
          res.json(true);
      } else {
        res.json(false);
      }
  }
  res.json(true);
});

router.post('/sun', function(req, res, next) {
  var bit = req.body['bit'];
  console.log(req.body);
  maria.query('UPDATE sun SET bit =\''+bit+'\',date = sysdate() WHERE id=\''+1+'\''), function (err, rows, fields) {
      if (!err) {
          res.json(true);
      } else {
        res.json(false);
      }
  }
  res.json(true);
});

router.put('/wm', function(req, res, next) {
  console.log(req.body);
  var wm = req.body['wm'];
  maria.query('UPDATE control SET wm =\''+wm+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.put('/led', function(req, res, next) {
  console.log(req.body);
  var led = req.body['led'];
  maria.query('UPDATE control SET led =\''+led+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.put('/fan', function(req, res, next) {
  console.log(req.body);
  var fan = req.body['fan'];
  maria.query('UPDATE control SET fan =\''+fan+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.put('/up', function(req, res, next) {
  console.log(req.body);
  var up = req.body['up'];
  var down = req.body['down'];
  maria.query('UPDATE button SET up =\''+up+'\',down =\''+down+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});


router.put('/auto', function(req, res, next) {
  console.log(req.body);
  var auto = req.body['auto'];
  maria.query('UPDATE button SET auto =\''+auto+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true);
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.get('/auto', function(req, res, next) {
  maria.query('select * from button;', function(err, rowe, fields) { 
      if(!err) { 
        res.json({rowe});
         
      } else { 
        console.log("err : " + err);
        res.send(err); 
      }
    });
  });

router.put('/setting', function(req, res, next) {
  console.log(req.body);
  var body = req.body;
  maria.query('UPDATE setting SET set_temp =\''+body.set_temp+'\',set_hum =\''+body.set_hum+'\',set_wind=\''+body.set_wind+'\',set_sun=\''+body.set_sun+'\',set_soilhum=\''+body.set_soilhum+'\',set_co2=\''+body.set_co2+'\',date=\''+body.date+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true); 
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.get('/setting', function(req, res, next) {
  maria.query('select * from setting;', function(err, rowx, fields) { 
      if(!err) { 
        res.json({rowx});
         
      } else { 
        console.log("err : " + err);
        res.send(err); 
      }
    });
  });

router.put('/on_off', function(req, res, next) {
  console.log(req.body);
  var body = req.body;
  maria.query('UPDATE remote SET on_off =\''+body.on_off+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true);
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.put('/strong', function(req, res, next) {
  console.log(req.body);
  var body = req.body;
  maria.query('UPDATE remote SET strong =\''+body.strong+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true);
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.put('/timer', function(req, res, next) {
  console.log(req.body);
  var body = req.body;
  maria.query('UPDATE remote SET timer =\''+body.timer+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true);
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.put('/turn', function(req, res, next) {
  console.log(req.body);
  var body = req.body;
  maria.query('UPDATE remote SET turn =\''+body.turn+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true);
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.put('/temp_down', function(req, res, next) {
  console.log(req.body);
  var body = req.body;
  maria.query('UPDATE remote SET temp_down =\''+body.temp_down+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true);
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.put('/temp_up', function(req, res, next) {
  console.log(req.body);
  var body = req.body;
  maria.query('UPDATE remote SET temp_up =\''+body.temp_up+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
    if(!err) { 
      res.json(true);
    } else { 
      console.log("err : " + err);
      res.send(err); 
    }
  }
  res.json(true);
});

router.get('/remote', function(req, res, next) {
  maria.query('select * from remote;', function(err, rowc, fields) { 
      if(!err) { 
        res.json({rowc});
      } else { 
        console.log("err : " + err);
        res.send(err); 
      }
    });
  });

router.post('/deep', function(req, res, next) {
  var body = req.body;
  console.log(req.body);
  maria.query('UPDATE deep SET value =\''+body.value+'\',value2=\''+body.temp_up+'\' WHERE id=\''+1+'\''), function(err, rows, fields) { 
      if (!err) {
          res.json(true);
      } else {
        res.json(false);
      }
  }
  res.json(true);
});

module.exports = router;
 
