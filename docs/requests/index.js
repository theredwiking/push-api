const getDevices = require('./get-devices');
const postNote = require('./post-note');
const postLink = require('./post-link');

module.exports = {
    paths: {
        '/devices': {
            ...getDevices
        },
        '/push/note': {
            ...postNote
        },
        '/push/link': {
            ...postLink
        }
    }
}