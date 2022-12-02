const Nightmare = require('nightmare')
const _ = require('lodash')
const nightmare = Nightmare({ show: true })


function navigate_eater() {
    const base_url = 'https://london.eater.com/maps/archives'
    const pageNumbers = _.range(1, 11)
    pageNumbers.forEach((pageNumber) => {
        const url = `${base_url}/${pageNumber}`
        console.log(url)
        nightmare.goto(url)
    })
}

navigate_eater()