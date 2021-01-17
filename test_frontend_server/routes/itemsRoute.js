const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/',
    itemsController.getSearch
);

router.get('/:id',
    itemsController.getItemById
);

module.exports = router;