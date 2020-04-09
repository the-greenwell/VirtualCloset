var express           = require('express'),
    router            = express.Router(),
    garmentController = require('../controllers/garments');
    // commentController = require('../controllers/comments');

router.get('/api/garments', garmentController.index);
router.post('/api/garments', garmentController.create);
router.delete('/api/garments/:garment_id', garmentController.destroy);

// router.get('/api/garments/:garment_id/comments', commentController.index);
// router.post('/api/garments/:garment_id/comments', commentController.create);

module.exports = router;
