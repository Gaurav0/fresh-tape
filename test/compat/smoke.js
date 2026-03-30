'use strict';

/**
 * Minimal compatibility suite: ensures the package loads and matches basic tape-style API.
 * Expand with cases that compare behavior to `tape` once upstream parity work lands.
 */

var tape = require('../..');

tape('compat: fresh-tape exports a callable test harness', function (t) {
    t.equal(typeof tape, 'function', 'default export is a function');
    t.end();
});
