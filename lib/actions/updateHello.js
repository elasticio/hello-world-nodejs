var Q = require('q');
var elasticio = require('elasticio-node');
var messages = elasticio.messages;
var dynamicMetadata = require('../schemas/updateHello.in.json');

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

    Q().then(emitData).fail(emitError).done(emitEnd);
}

exports.getMetaModel = function(cfg, cb) {
    console.log('cfg', cfg);
    console.log('dynamicMetadata', dynamicMetadata);

    setTimeout(() => {
        cb('null, {in: dynamicMetadata}');
    }, 15 * 1000);
}
