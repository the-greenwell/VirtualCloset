var models = require('../models');

var data = [{
  color: 'Black',
  brand: 'Adidas',
  type : 'Shirt',
  size : 'XL'
}, {
  color: 'Blue',
  brand: 'Levi',
  type : 'Jeans',
  size : 'L'
}, {
  color: 'Red',
  brand: 'Nike',
  type : 'Hoodie',
  size : 'M'
}]

models.Garment.deleteMany({}, function(err,res){
  if(err){
    console.log('Error removing garments:', err);
    return;
  }
  console.log('removed garments');
  for(var i = 0;i < data.length; i++){
    models.Garment.create(data[i], function(err,garments){
      if (err) {
        console.log('error creating garments:', err);
        return
      }
      console.log('garment created');
      return
    });
  }
})
