"use strict";

var semver = require('semver');
var requirem = require('../utils').requirem;

// Just for test.

exports.store = function (settings) {
    var express = requirem('express');
    var infoExpress = require('express/package');
    var MemoryStore = semver.lt(infoExpress.version, '4.0.0') ? express.session.MemoryStore : requirem('express-session').MemoryStore;
    return new MemoryStore(settings);
};
