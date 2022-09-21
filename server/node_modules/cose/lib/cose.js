"use strict";

var path = require('path');
var fs = require('fs');

var existsSync = fs.existsSync || path.existsSync;

module.exports = exports = new Cose;
exports.Cose = Cose;

function Cose() {
}

Cose.prototype.store = function (name, options) {
    if (typeof name === 'object') {
        options = name;
        name = options.driver;
    }
    options = options || {};

    if (typeof name !== 'string') {
        throw new Error('No specified driver!');
    }

    var adapter;
    if (name.match(/^\//)) {
        // try absolute path
        adapter = require(name);
    } else if (existsSync(__dirname + '/adapters/' + name + '.js')) {
        // try built-in adapter
        adapter = require('./adapters/' + name);
    } else {
        // try foreign adapter
        try {
            adapter = require('cose-' + name);
        } catch (e) {
            console.log('\nWARNING: Cose adapter "' + name + '" is not installed,\nso session would not work, to fix run:\n\n    npm install cose-' + name, '\n');
            process.exit(1);
        }
    }
    return adapter.store(options);
};