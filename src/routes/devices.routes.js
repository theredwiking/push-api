const express = require('express');
const dev = require('../controllers/devices');

const router = express.Router();

router.get('/', (req, res) => {
    dev(req, res);
})

module.exports = router;