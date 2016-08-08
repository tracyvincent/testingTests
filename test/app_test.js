var addOne = require('../src/app.js').addOne;

var expect = require('chai').expect;

describe('testing the add one function', function(){
  it('should add 1 to the argument', function(){
    // here is where the test code goes
    var number = 42;
    var result = addOne(number);

    expect(result).to.equal(43);
  });

  // it(...);

  // describe(...)
});
