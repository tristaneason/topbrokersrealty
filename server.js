const express = require("express")
const bodyParser = require("body-parser")
const favicon = require("serve-favicon")

const cssAssets = __dirname + "/public/css"
const imgAssets = __dirname + "/public/images"
const faviconPath = __dirname + "/public/images/favicon.ico"

express()
  .set("view engine", "hjs")
  .use(express.static(cssAssets))
  .use(express.static(imgAssets))
  .use(favicon(faviconPath))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .get("/", (req, res, next) => {
    res.render("home")
  })
  .get("/privacy-policy", (req, res, next) => {
    res.render("privacy")
  })
  .post("/send-info", (req, res, next) => {
    const { name } = req.body
    const { phone } = req.body
    res.send(`You sent ${req.body.name} and ${req.body.phone}.`)
  })
  .listen(3000)