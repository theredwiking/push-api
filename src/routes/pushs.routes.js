const express = require('express');
const push = require('../controllers/pushs');

const router = express.Router();

router.post('/note', (req, res) => {
    push.note(req, res);
});

router.post('/link', (req, res) => {
    push.link(req, res);
})

module.exports = router;