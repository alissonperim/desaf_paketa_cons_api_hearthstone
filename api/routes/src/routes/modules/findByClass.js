import express from 'express'
import axios from 'axios'
import { options } from '../../utils/optionsConfig.js'

const router = express.Router()

router.get('/get/class/:className', async function (req, res) {
  const { className } = req.params
  options.url += `/classes/"${className}`

  await axios.request(options)
    .then((response) => {
      return res.json(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

export default router