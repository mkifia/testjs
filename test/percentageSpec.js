var Percentage = require('../lib/Percentage');
var assert = require('chai').assert;
var expect = require('chai').expect;

require('chai').should();

describe('Percentage', function () {
	
	describe('#evolution', function () {
		
		// 
		it('give an evolution in percentage', function() {

			expect(Percentage.evolution(100, 200)).to.be.equal(100);
			expect(Percentage.evolution(100, 150)).to.be.equal(50);
			expect(Percentage.evolution(100, 50)).to.be.equal(-50);
		});

		it('handle 0 in evolution', function() {
			expect(Percentage.evolution(0, 100)).to.be.equal(Infinity);
		});

		it('Should round off two-digit after the comma', function() {
			expect(Percentage.evolution(30, 100)).to.be.equal(233.33);
		})
	});
})
