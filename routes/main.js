const router = require("express").Router()
const nodemailer = require("nodemailer")
const credentials = require("./../private/credentials")

router
  .get("/", (req, res, next) => {
    res.render("home")
  })
  .get("/privacy-policy", (req, res, next) => {
    res.render("privacy")
  })
  .post("/", (req, res, next) => {
    const { name } = req.body
    const { phone } = req.body
    const { user } = credentials
    const { pass } = credentials
    
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user,
        pass
      }
    })

    const mailOptions = {
      from: "topbrokersrealty.com",
      to: "tbrcommercial@gmail.com",
      subject: `Callback Request from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if(error) {
        console.log(error)
        res.render("home")
      }
      else {
        res.render("home")
      }
    })
  })

module.exports = router