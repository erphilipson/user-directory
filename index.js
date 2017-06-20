const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require("./data");
const app = express();

app.use(express.static('public'))
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', function(req, res) {
  res.render('index', {data})
})

app.listen(3000, function () {
  console.log('You did it!');
})
