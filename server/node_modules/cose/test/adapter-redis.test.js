"use strict";

var cose = require('../');
var t = require('chai').assert;

describe('adapter/redis', function () {

    it('should initiate redis store with name specified', function () {
        var store = cose.store('redis', { host: 'localhost' });
        t.ok(store);
    });

    it('should initiate redis store with one options parameter', function () {
        var store = cose.store({ driver: 'redis', host: 'localhost' });
        t.ok(store);
    });

    it('should throw exception for no driver specified', function () {
        t.throw(function () {
            cose.store({ });
        });
    });
});