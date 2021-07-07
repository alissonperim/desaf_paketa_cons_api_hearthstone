import express from 'express'
import axios from 'axios'
import cors from 'cors'
import { options } from '../../utils/optionsConfig.js'

const app = express()

app.use(cors())

const router = express.Router()

router.get('/classes/:className', async function (req, res) {
  const { className } = req.params
  options.url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${className}`

  await axios.request(options)
    .then((response) => {
      const responseData = response.data
      return res.json(responseData.slice(0, 30))
    })
    .catch((error) => {
      console.log(error)
    })
})

export default router