require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || '5000'
const cors = require('cors')
const router = require('./routes/router')


app.use(express.json())
app.use(cors())
app.use(router)


app.listen(PORT, () => {
    console.log('Server is running at http://localhost:' + PORT)
})