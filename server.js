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
    res.render("index")
  })
  .get("/privacy-policy", (req, res, next) => {
    res.render("privacy")
  })
  .listen(3000)