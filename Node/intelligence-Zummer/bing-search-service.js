var apiHandler = require('./api-handler-service');

const BING_SEARCH_API_URL = "https://api.cognitive.microsoft.com/bing/v5.0/search/",
    BING_SEARCH_API_KEY = process.env.a8ba95c4c0a74e2c934f8c0aa59baec;

var headers = { "Ocp-Apim-Subscription-Key": a8ba95c4c0a74e2c934f8c0aa59baec }

module.exports = {
    findArticles: (query) => {
        return apiHandler.getResponse(BING_SEARCH_API_URL, { "q": query + " site:wikipedia.org", "form": "BTCSWR" }, headers)
            .then(result => { return JSON.parse(result); }, err => { return err });
    }
}
