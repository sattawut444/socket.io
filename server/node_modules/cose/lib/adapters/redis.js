"use strict";

var semver = require('semver');
var requirem = require('../utils').requirem;

exports.store = function (settings) {
    var ConnectRedis = requirem('connect-redis');
    var express = requirem('express');
    var infoExpress = require('express/package');
    var infoConnectRedis = require('connect-redis/package');

    var express3 = semver.lt(infoExpress.version, '4.0.0');
    var cr1 = semver.lt(infoConnectRedis.version, '1.5.0');

    if (express3 && !cr1) {
        console.warn('connect-redis version is too high, you should use version <= 1.4.7 for express version 3.x');
        process.exit(1);
    }

    if (!express3 && cr1) {
        console.warn('connect-redis version is too low, you should use version >= 2.0.0 for express version 4.x');
        process.exit(1);
    }

    var RedisStore = express3 ? ConnectRedis(requirem('express')) : ConnectRedis(requirem('express-session'));
    return new RedisStore(settings);
};
