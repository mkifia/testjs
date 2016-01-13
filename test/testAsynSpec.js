// Asynchronous code

// var User = require('../lib/User');
var User = function (name) {
	this.name = name;
};

User.prototype.save = function() {
	return this.name
}

describe('User', function() {
	describe('#save()', function() {
		it('Should save user without err', function(done) {
			var user = new User('Martin');
			user.save();
			done();
		})
	})
})
