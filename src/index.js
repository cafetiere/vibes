const rp = require('promise-request-retry');
const htmlparser = require("htmlparser2");

const API_KEY = process.env.API_KEY
const URL = 'https://london.eater.com/maps'

options = {
    uri: `http://api.scraperapi.com/`,
    qs: {
        'api_key': API_KEY,
        'url': URL
    },
    resolveWithFullResponse: true
}
let dom
rp(options)
    .then(response => {
        dom = htmlparser.parseDocument(response.body)
        console.log(dom)
    })
    .catch(error => {
        console.log(error)
    })
