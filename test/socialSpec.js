var chai = require('chai');
var expect = chai.expect;
var Social = require('../lib/Social');
var sinon = require('sinon');

require('chai').should();

describe('Social', function() {

	var url = 'https://github.com/mkifia/testjs';

	it('Should have twitter_url', function() {
		expect(Social).to.have.property('twitter_url');
	});

	it('Should have faceboook_url', function() {
		expect(Social).to.have.property('facebook_url');
	});

	describe('#getTwitterCount', function() {

		it('should be a function', function() {
			expect(Social.getTwitterCount).to.be.a('function');
		});
		
		it('should call callAPI', function() {
			sinon.spy(Social, 'callAPI');
			Social.getTwitterCount(url);
			expect(Social.callAPI.withArgs(Social.twitter_url + url).calledOnce).to.be.true;
			Social.callAPI.restore();
		});

		it('should return count', function(done) {

			var stub = sinon.stub(Social, 'callAPI');
			var Promise = require('promise');

			stub.returns(new Promise(function(resolve, reject) {
				resolve({count: 3});
			}))

			Social.getTwitterCount(url).then(function(count) {
				expect(count).to.be.equal(3);
				done();
			});
		});
	});
});
