const pusher = require('../../push');

function device(req, res) {
    pusher.devices((err, resp) => {
        if (err) throw err;
        res.status(200).send(resp)
    })
}

module.exports = device;