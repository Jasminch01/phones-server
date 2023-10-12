const express = require("express");
const phones = require('./phones.json');
const cors = require ('cors')
const app = express();
const port = 5000;

app.use(cors())

app.get('/' , (req, res) => {
    res.send('my phones server is comming soon')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req,res) => {
    const id = parseInt(req.params.id);
    console.log('i need data for this ', id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
})

app.listen(port, () => {
    console.log(`server running ${port}`)
})