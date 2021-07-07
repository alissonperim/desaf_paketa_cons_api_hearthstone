import express from 'express'
import cors from 'cors'
import routerGet from './modules/get.js'
import FindByClass from './modules/findByClass.js'
import FindByRace from './modules/findByRace.js'
import FindByFaction from './modules/findByFaction.js'
import Info from './modules/info.js'

const app = express()

app.use(cors())
app.use(routerGet)
app.use(FindByClass)
app.use(FindByRace)
app.use(FindByFaction)
app.use(Info)

export default app