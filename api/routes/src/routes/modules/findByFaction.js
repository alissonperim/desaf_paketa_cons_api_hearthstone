import express from 'express'
import axios from 'axios'
import { options } from '../../utils/optionsConfig.js'

const router = express.Router()

router.get('/get/faction/:factionName', async function (req, res) {
  const { factionName } = req.params
  options.url += `/factions/${factionName}`

  await axios.request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

export default router