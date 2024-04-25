const express = require('express')
const app = express()
const port = 3000

// specifie which engin to use
app.set('view engine','ejs')
// base path
const basePath = 'http://192.168.1.46:3000/';
app.use(express.static('public'));

app.get('/', (req, res) => {
  let portfolioName = "himanshu"
  let content =" hi! this is my content"
  res.render('pages/index',{basePath})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})