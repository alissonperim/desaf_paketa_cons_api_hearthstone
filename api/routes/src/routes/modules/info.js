import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()

app.use(cors())

var options = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    headers: {
        'x-rapidapi-key': '48f4734af2msh1f783ef61014323p15db2bjsn719800305157',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
};

const router = express.Router()

router.get('/info', async function (req, res) {
    axios.request(options)
        .then((response) => {
            console.log(response.data)
            return res.json(response.data)
        })
})


export default router