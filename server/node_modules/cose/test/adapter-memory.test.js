"use strict";

var cose = require('../');
var t = require('chai').assert;

describe('adapter/redis', function () {

    it('should initiate memory store with name specified', function () {
        var store = cose.store('memory');
        t.ok(store);
    });

});