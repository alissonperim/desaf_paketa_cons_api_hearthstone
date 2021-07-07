import express from 'express'
import axios from 'axios'
import cors from 'cors'
import { options } from '../../utils/optionsConfig.js'

const app = express()
app.use(cors())
const router = express.Router()

router.get('/factions/:factionName', async function (req, res) {
  const { factionName } = req.params
  options.url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/${factionName}`

  await axios.request(options)
    .then((response) => {
      res.json(response.data.slice(0, 50))
    })
    .catch((error) => {
      console.log(error)
    })
})

export default router