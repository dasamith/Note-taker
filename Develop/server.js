const express = require('express')
const app = express()
const port = 3000
var path = require('path');
app.use(express.static('public'))

var dbArray = require('./db/db.json')

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/', function (req, res) {
    // res.send('Hello World! her we goooooo!!!! asdfasdfasdfd')
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/notes', function (req, res) {
    //res.send('notes file coming soon!!')
    res.sendFile(path.join(__dirname + '/public/notes.html'));
})

app.post('/api/notes', function (req, res) {
    console.log('we hit the route!!!!!!', req.body)
    dbArray.push(req.body)
    //res.send('notes file coming soon!!')
    //res.sendFile(path.join(__dirname + '/public/notes.html'));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))