const pusher = require('../../push');


const Pushs = {
    note: function(req, res) {
        data = req.body;
        pusher.note(data.device, data.title, data.msg, (err, response) => {
            if (err) {
                res.status(400).send({Error: err});
            }
            res.status(201).send({title: data.title, message: data.msg});
        });
    },
    link: function(req, res) {
        data = req.body;
        pusher.link(data.device, data.title, data.url, data.msg, (err, response) => {
            if (err) {
                res.status(400).send({Error: err});
            }
            res.status(201).send({title: data.title, url: data.url, message: data.msg});
        });
    }
}

module.exports = Pushs;