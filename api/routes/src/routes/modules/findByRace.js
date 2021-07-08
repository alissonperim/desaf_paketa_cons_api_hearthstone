import express from 'express'
import axios from 'axios'
import cors from 'cors'
import { options } from '../../utils/optionsConfig.js'
const app = express()

app.use(cors())

const router = express.Router()

router.get('/races/:raceName/:amount', async function (req, res) {
  const { raceName, amount } = req.params
  options.url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/${raceName}`

  await axios.request(options)
    .then((response) => {
      return res.json(response.data.slice(0, amount))
    })
    .catch((error) => {
      console.log(error)
    })
})

export default router