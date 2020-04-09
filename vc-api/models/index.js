var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/front_end', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

module.exports.Garment = require('./garment');
// module.exports.Comment = require('./comment');
