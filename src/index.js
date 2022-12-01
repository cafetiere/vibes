const rp = require('promise-request-retry');
const htmlparser = require("htmlparser2");

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
        // console.log(response.body)
        const dom = htmlparser.parseDocument(response)
        console.log(dom)
    })
    .catch(error => {
        console.log(error)
    })
