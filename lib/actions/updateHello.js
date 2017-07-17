var Q = require('q');
var elasticio = require('elasticio-node');
var messages = elasticio.messages;
var dynamicMetadata = require('../schemas/updateHello.in.js');

exports.process = processAction;

/**
 *  This method will be called from elastic.io platform providing following data
 *
 * @param msg
 * @param cfg
 */
function processAction(msg, cfg) {
    var self = this;
    var name = cfg.name;

    function emitData() {

        console.log('About to say hello to ' + name + ' again');

        var body = {
            greeting: name + ' How are you today?',
            originalGreeting: msg.body.greeting
        };

        var data = messages.newMessageWithBody(body);

        self.emit('data', data);
    }

    function emitError(e) {
        console.log('Oops! Error occurred');

        self.emit('error', e);
    }

    function emitEnd() {
        console.log('Finished execution');

        self.emit('end');
    }

    function getMetaModel(cfg, cb) {
        console.log('cfg', cfg);

        setTimeout(() => {
            cb(null, dynamicMetadata);
        }, 30);
    }

    Q().then(emitData).fail(emitError).done(emitEnd);

}
