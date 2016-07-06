'use strict';

require('chai').should();

module.exports = function() {

    this.Then(/^the response code must be (\d+)$/, function (code, done) {
        const world = this;

        const response = world.getValue('response');
        `${response.statusCode}`.should.equal(code);

        done();
    });

};
