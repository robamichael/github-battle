var axios = require('axios');

module.exports = {
	fetchPopularRepos: function (language) {
		//takes a language and fetches the most popular repos
		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

		return axios.get(encodedURI)
			.then (function (response) {
				return response.data.items;
			});
	}
}