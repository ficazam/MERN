const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config({ path: './backend/.env' })

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
const connection = mongoose.connection

mongoose.connect(uri, { useNewUrlParser: true })

connection.once('open', () => {
    console.log('MongoDB Database Connection established successfully');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})