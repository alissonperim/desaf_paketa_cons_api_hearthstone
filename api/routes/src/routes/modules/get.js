import express from 'express'
import axios from 'axios'
import cors from 'cors'
import { options } from '../../utils/optionsConfig.js'
const router = express.Router()
const app = express()

app.use(cors())

router.get('/get', async function (req, res) {
  await axios.request(options)
    .then((response) => {
      const { Classic } = response.data
      res.json(Classic.slice(100, 150))
    })
    .catch((error) => {
      console.log(error)
    })
})

export default router