
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
    .goto('https://london.eater.com/maps/archives')
    .wait('h2')
    .evaluate(selector => {
        console.log(Array.from(document.querySelectorAll(selector))
            .map(element => element.href)
            .filter((el) => {
                return el && el != ''
            }));}, 'h2')
    .click('h2')
    .then(console.log)
    .catch(error => {
        console.error('Scrape failed', error)
    })
