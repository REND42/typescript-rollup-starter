'use strict';
const expect = require('chai').expect;
const add = require('../lib/index').add;
const multify = require('../lib/index').multify

describe('lib function test', () => {
  it('should return 2', () => {
    const result = add(1, 1);
    expect(result).to.equal(2);
  });
});

describe('lib function test', () => {
  it('should return 6', () => {
    const result = multify(2, 3);
    expect(result).to.equal(6);
  });
});