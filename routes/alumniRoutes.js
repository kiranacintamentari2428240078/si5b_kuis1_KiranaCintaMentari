const express = require('express');
const router = express.Router();
const alumniController = require('../controllers/alumniController');
const cekApiKey = require('../middlewares/cekAPIKey');

router.get('/', alumniController.getAll);
router.get('/:id', alumniController.getById);
router.post('/', cekApiKey, alumniController.create);
router.put('/:id', cekApiKey, alumniController.update);
router.delete('/:id', cekApiKey, alumniController.remove);

module.exports = router;