const express = require('express')
const app = express()
const port = 3001
require('dotenv').config();
// specifie which engin to use
app.set('view engine','ejs')
// base path
const basePath = `https://tour-and-trevel-git-main-gutamh142-gmailcoms-projects.vercel.app//`;
app.use(express.static('public'));

app.get('/', (req, res) => {
  let portfolioName = "himanshu"
  let content =" hi! this is my content"
  res.render('pages/index',{basePath})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})