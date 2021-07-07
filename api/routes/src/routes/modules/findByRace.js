import express from 'express'
import axios from 'axios'
import { options } from '../../utils/optionsConfig.js'

const router = express.Router()

router.get('/get/race/:raceName', async function (req, res) {
  const { raceName } = req.params
  options.url += `/races/${raceName}`

  await axios.request(options)
    .then((response) => {
      return res.json(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

export default router