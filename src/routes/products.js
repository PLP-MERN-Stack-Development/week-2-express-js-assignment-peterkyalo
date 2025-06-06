

const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');


// Advanced features: filtering, pagination, search, stats
router.get(['/stats', '/stats/'], productsController.getProductStats);
router.get('/', productsController.getAllProducts);
router.get('/:id', (req, res, next) => {
  // Prevent treating 'stats' as an id
  if (req.params.id.toLowerCase() === 'stats') {
    return res.status(404).json({ message: 'Not found' });
  }
  return productsController.getProductById(req, res, next);
});
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;