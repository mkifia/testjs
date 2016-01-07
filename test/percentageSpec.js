var Percentage = require('../lib/Percentage');
var assert = require('assert');

describe('Percentage', function () {
	
	describe('#evolution', function () {
		
		// 
		it('give an evolution in percentage', function() {

			assert.equal(Percentage.evolution(100, 200), 100);
			assert.equal(Percentage.evolution(100, 150), 50);
			assert.equal(Percentage.evolution(100, 50), -50);
		})
	})
})