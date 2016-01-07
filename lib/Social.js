module.exports = {
	
	twitter_url: 'urls.api.twitter.com/1/urls/count.json?callback=?&url=',
	facebook_url: 'https://graph.facebook.com/',
	getTwitterCount: function(url) {
		return this.callAPI(this.twitter_url + url);
	},

	callAPI: function(url) {

	}
}
