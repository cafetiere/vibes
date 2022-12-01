const rp = require('promise-request-retry');
const jsdom = require('jsdom');

const API_KEY = process.env.API_KEY
const URL = 'http://quotes.toscrape.com/page/1/'

options = {
    uri: `http://api.scraperapi.com/`,
    qs: {
        'api_key': API_KEY,
        'url': URL
    },
    resolveWithFullResponse: true
}

rp(options)
    .then(response => {
        console.log(response.body)
    })
    .catch(error => {
        console.log(error)
    })
