const express = require('express')
const app = express()
const port = process.env.PORT || 3001;

require('dotenv').config();
// specifie which engin to use
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// base path
// const basePath = process.env.BASE_PATH  || '';
const basePath = 'http://192.168.1.36:3001/';
// app.use(express.static('public'));

app.get('/', (req, res) => {
  let portfolioName = "himanshu"
  let content =" hi! this is my content"
  res.render('pages/index',{basePath})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})