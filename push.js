const Pushbullet = require('pushbullet');
const dotenv = require('dotenv');

dotenv.config();
module.exports = pusher = new Pushbullet(process.env.PUSH)