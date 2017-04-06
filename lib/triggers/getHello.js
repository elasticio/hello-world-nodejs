var Q = require('q');
var elasticio = require('elasticio-node');
var messages = elasticio.messages;

exports.process = processTrigger;


function startup(cfg) {

    console.log('\n\n startup', cfg, '\n');
    return Promise.resolve({
        a: 'm',
        b: [2, 3, 4],
        date: '' + new Date()
    })
}

function shutdown(cfg, startupData) {
    console.log('\n\n shutdown', cfg, startupData, '\n');
}


function processTrigger(msg, cfg) {
    var name = cfg.name;

    var self = this;


    function emitData() {
        console.log('About to say hello to ' + name);

        var body = {
            greeting: 'Hello ' + name + '!'
        };

        var data = messages.newMessageWithBody(body);

        console.log('Emitting data');

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
