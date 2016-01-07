var Percentage = require('../lib/Percentage');
var assert = require('assert');

describe('Percentage', function () {
	
	describe('#evolution', function () {
		
		// 
		it('give an evolution in percentage', function() {

			assert.equal(Percentage.evolution(100, 200), 100);
			assert.equal(Percentage.evolution(100, 150), 50);
			assert.equal(Percentage.evolution(100, 50), -50);
		});

		it('handle 0 in evolution', function() {
			assert.equal(Percentage.evolution(0, 100), Infinity);
		});

		it('Should round off two-digit after the comma', function() {
			assert.equal(Percentage.evolution(30, 100), 233.33)
		})
	});
})
