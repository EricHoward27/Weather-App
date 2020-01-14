
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()

}
const DARK_API_KEY = process.env.DARK_API_KEY
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
console.log(req.body)
})

app.listen(5500, () => {
    console.log('Server Starting')
})