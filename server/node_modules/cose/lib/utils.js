"use strict";

exports.requirem = requirem;

function requirem(module) {
    try {
        return require(module);
    } catch (e) {
        console.warn('Run "npm install cose ' + module + '" command to use cose using ' + module + ' session store engine');
        process.exit(1);
    }
}
