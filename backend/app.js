const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Candidates = require('./models/candidates');

mongoose.connect('mongodb+srv://Ronald:XDCniGEnR4e3cOs5@serverlessinstance0.yavon.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to db!!!')
    })
    .catch((err) => {
        console.log(err)
    })

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/candidates', (req, res, next) => {
    const candidates = [{
            name: 'NAME 1',
            picture: 'URL 1',
            description: 'Description 1 here'
        },
        {
            name: 'NAME 2',
            picture: 'URL 2',
            description: 'Description 2 here'
        },
        {
            name: 'NAME 3',
            picture: 'URL 3',
            description: 'Description 3 here'
        },
        {
            name: 'NAME 3',
            picture: 'URL 3',
            description: 'Description 3 here'
        }
    ]
    res.status(200).json({
        message: 'Candidates fetch successfully',
        candidates: candidates
    });
});

module.exports = app;