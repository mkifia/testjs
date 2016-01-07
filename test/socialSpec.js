var expect = require('chai').expect;
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
		})
		it('should call callAPI', function() {
			sinon.spy(Social, 'callAPI');
			Social.getTwitterCount(url);
			expect(Social.callAPI.withArgs(Social.twitter_url + url).calledOnce).to.be.true;
		})
	})
})