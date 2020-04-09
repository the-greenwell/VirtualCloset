var mongoose      = require('mongoose'),
    Schema        = mongoose.Schema;
    // CommentSchema = require('./comment').schema;

var GarmentSchema = new Schema({
    color: String,
    brand: String,
    type: String,
    size: String
    // comments: [CommentSchema]
});

var Garment = mongoose.model('Garment', GarmentSchema);

module.exports = Garment;
