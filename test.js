const assert = require('assert');
const script = require('./script');


it('Calculates the average of tips', () => {
    assert.equal(script.calcAverage([1, 1, 1]), 1);
});

