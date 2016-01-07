module.exports = {

	evolution: function (a, b) {
		
		return this.round(100 * (b - a) / a);
	},

	round: function(nbr) {
		return Math.round(nbr * 100) / 100;
	}
}
