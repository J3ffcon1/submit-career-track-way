const assert = require('assert');
const calc = require('../lib/calc');

//suite feature for tests. "it" will be outlined under label

describe('calculator', () => {
    //'it' is mocha's way of registering a test function.
    it('add', () => {
        //excercising the code we want to test.
        //in TDD also the code we want to write.
    const sum = calc.add(1,2);
     //make an assertion about what is "pass" What passes the test.
      // parameters: actual, expected.
      assert.equal(sum, 3);
    } );
});