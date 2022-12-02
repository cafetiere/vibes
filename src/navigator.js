const Nightmare = require('nightmare')
const _ = require('lodash')
const nightmare = Nightmare({ show: true })


function navigate_eater() {
    const base_url = 'https://london.eater.com/maps/archives'
    const pageNumbers = _.range(1, 11)
    pageNumbers.forEach((pageNumber) => {
        const url = `${base_url}/${pageNumber}`
        const page = nightmare.goto(url)

        const elements = page.evaluate(()=>{
            return document.getElementsByClassName("c-compact-river__entry c-compact-river__entry--featured")
        })
    })
}

navigate_eater()
