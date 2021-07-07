const selectClassOptions = document.querySelector('#cards-class')
const selectFactionOptions = document.querySelector('#cards-faction')
const selectRaceOptions = document.querySelector('#cards-race')
const cardsSectionDiv = document.querySelector('.cards-section')
const cardsFilterSelect = document.querySelectorAll('.cards-filter')
const selectOptions = document.querySelectorAll('option')

const fetchResponse = async (selectFilter, typeOfFilter) => {
  cardsSectionDiv.innerHTML = ""
  console.log(selectFilter, typeOfFilter)
  await fetch(`http://localhost:3000/${selectFilter}/${typeOfFilter}`)
    .then(res => res.json())
    .then(data => {
      data.map((d) => {
        if (d.img) {
          cardsSectionDiv.innerHTML += `
                            <div class="cards-section-container-img">
                                <img src="${d.img}" alt="imgAlt"/>
                            </div>
                        `
        }
      })
    })
}




async function classesToOptions() {
  const url = `http://localhost:3000/info`
  await fetch(url)
    .then(res => res.json())
    .then(data => {
      const { classes, factions, races } = data
      classes.map(value => (
        selectClassOptions.innerHTML += `
                    <option value="${value}">${value}</option>
                `
      ))
      factions.map(value => (
        selectFactionOptions.innerHTML += `
                    <option value="${value}">${value}</option>
                `
      ))
      races.map(value => (
        selectRaceOptions.innerHTML += `
                    <option value="${value}">${value}</option>
                `
      ))
    })
}

async function returnGet() {
  const url = 'http://localhost:3000/get'
  await fetch(url)
    .then((response) => { return response.json() })
    .then(T => {
      T.map((item) => {
        if (item.img) {
          cardsSectionDiv.innerHTML += `
                        <div class="cards-section-container-img">
                            <img src="${item.img}" alt="imgAlt"/>
                        </div>
                    `
        }
      })
    })
}

async function returnByClass() {

}


const init = () => {
  classesToOptions()
  returnGet()
  selectClassOptions.addEventListener('change', (e) => {
    let nameOfSelect = selectClassOptions.getAttribute('name')
    fetchResponse(nameOfSelect, e.target.value)
  })
  selectFactionOptions.addEventListener('change', (e) => {
    let nameOfSelect = selectFactionOptions.getAttribute('name')
    fetchResponse(nameOfSelect, e.target.value)
  })
  selectRaceOptions.addEventListener('change', (e) => {
    let nameOfSelect = selectRaceOptions.getAttribute('name')
    fetchResponse(nameOfSelect, e.target.value)
  })
}

init()