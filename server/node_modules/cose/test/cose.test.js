"use strict";

var t = require('chai').assert;

describe('cose', function () {
    it('should initiate cose', function () {
        var cose = require('../');
        t.ok(cose);
        t.isFunction(cose.store);
        t.isFunction(cose.Cose);
    });
});