var Promise = require('promise');
var request = require('request');
module.exports = {
	
	twitter_url: 'urls.api.twitter.com/1/urls/count.json?callback=?&url=',
	facebook_url: 'https://graph.facebook.com/',
	getTwitterCount: function(url) {
		var self = this;
		return new Promise(function(resolve, reject) {
			self.callAPI(self.twitter_url + url).then(function(result) {
				resolve(result.count)
			});
		});
	},

	callAPI: function(url) {
		return new Promise(function(resolve, reject) {
			request(url, function(error, response, body) {
				if(!error && response.statusCode == 200) {
					resolve(JSON.parse(body)); 
				} else {
					reject(error);
				}
			});
		});
	}
}
