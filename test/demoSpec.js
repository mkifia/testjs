var assert = require('assert');

describe('test de demo', function() {
	it('should do some thing', function () {
		
		a = 2;
		b = a * 3;

		assert.equal(b, 6, 'la multiplication a fonctionnée');
		// assert.equal(b, 7, 'la multiplication a échouée');

	});
});
