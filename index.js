const camelCase = require('camelcase');

console.log(camelCase('foo-bar'));
console.log(camelCase('ik-ben-aris_rosbach'));


// const express = require('express')
// const app = express()
// const port = 8000


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')

express()
  .use('/static', express.static('static'))

  .get('/', onhome)
  .get('/about', onabout)
  .get('/login', onlogin)

  .listen(8000)

function onhome(req, res) {
  res.send('<h1>Hello World!</h1>')
}

function onabout(req, res) {
  res.send('<h1>About me</h1>')
}

function onlogin(req, res) {
  res.send('<h1>Login</h1>')
}