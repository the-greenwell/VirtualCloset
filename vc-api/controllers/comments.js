var models  = require('../models'),
    Comment = models.Comment,
    Garment = models.Garment;

function index(req,res){
  Garment.findById(req.params.garment_id, function(err,garment){
    if (err) res.send(err);
    else {
      res.json(garment.comments);
    }
  })
}

function create(req,res){
  Comment.create(req.body, function(err, comment){
    if (err) res.status(500).send(err);
    else {
      Garment.findById(req.params.garment_id, function(err, garment){
        if (err) res.send(err);
        else {
          garment.comments.push(comment);
          garment.save();
          res.json(comment);
        }
      })
    }
  })
}



module.exports.index  = index;
module.exports.create = create;
