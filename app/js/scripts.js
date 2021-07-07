let selectClassOptions = document.querySelector('#cards-class')
let selectFactionOptions = document.querySelector('#cards-faction')
let selectRaceOptions = document.querySelector('#cards-race')

async function classesToOptions() {
    const url = `http://localhost:3000/info`
    await fetch(url)
        .then(res => res.json())
        .then(data => {
            const { classes, factions, races } = data
            classes.map(value => (
                selectClassOptions.innerHTML += `
                    <option value=${value}>${value}</option>
                `
            ))
            factions.map(value => (
                selectFactionOptions.innerHTML += `
                    <option value=${value}>${value}</option>
                `
            ))
            races.map(value => (
                selectRaceOptions.innerHTML += `
                    <option value=${value}>${value}</option>
                `
            ))
        })
}

async function returnGet() {
    const url = 'http://localhost:3000/get'
    await fetch(url)
        .then((response) => { return response.json() })
        .then(T => {
            console.log(T)
        })
    // const returnList = await list.json()
    // console.log(returnList)
    // const teste = returnList
    // teste.map((item) => {
    //     if (item.img) {
    //         console.log(item)
    //     }
    // })
}


const init = () => {
    classesToOptions()
    returnGet()
}

init()