export const getAllCards = () => {
  const config = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
    headers: {
      'x-rapidapi-key': '48f4734af2msh1f783ef61014323p15db2bjsn719800305157',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
  return config
}

export const getByType = (param) => {
  const config = {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/${param}`,
    headers: {
      'x-rapidapi-key': '48f4734af2msh1f783ef61014323p15db2bjsn719800305157',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
}

export const getByFaction = (param) => {
  const config = {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/${param}`,
    headers: {
      'x-rapidapi-key': '48f4734af2msh1f783ef61014323p15db2bjsn719800305157',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
}

export const getByRace = (param) => {
  const config = {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/${param}`,
    headers: {
      'x-rapidapi-key': '48f4734af2msh1f783ef61014323p15db2bjsn719800305157',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
}

export const getByClass = (param) => {
  const config = {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/${param}`,
    headers: {
      'x-rapidapi-key': '48f4734af2msh1f783ef61014323p15db2bjsn719800305157',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
}