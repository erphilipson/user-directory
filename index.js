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
  res.render('index', {users: data.users})
})

app.get('/:id', function(req, res) {
  let id = req.params.id;
  let name = data.users[id-1].name;
  let avatar = data.users[id-1].avatar;
  let address = data.users[id-1].address;
  let job = data.users[id-1].job;
  let email = data.users[id-1].email;
  let company = data.users[id-1].company;
  let phone = data.users[id-1].phone;

  res.render('test', {name, email, address})
})

app.listen(3000, function () {
  console.log('You did it!');
})
