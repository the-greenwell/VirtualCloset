var models  = require('../models');
var Garment = models.Garment;

function index(req,res) {
    Garment.find({}, function(err,clothes){
      if (err) res.send(err);
      else res.json(clothes)
    })
}

function create(req,res) {
  console.log(req.body)
    Garment.create(req.body, function(err, garment){
      if (err) res.end(err);
      else res.json(garment)
    })
}

function destroy(req,res){
    Garment.findByIdAndRemove(req.params.garment_id, function(err,garment){
      if (err) res.end(err);
      else res.send('garment deleted');
    })
}

module.exports.index   = index;
module.exports.create  = create;
module.exports.destroy = destroy;
