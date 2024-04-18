const nodemailer = require("nodemailer");
const express = require("express");
const emailRouter = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "shlokgaikwad804@gmail.com",
    pass: "ubey jzjv jbsp xbuv",
  },
});
function sendEmail(to, body) {
  const email_data = {
    from: {
      name: "shlok",
      address: "",
    }, // sender address
    to: `${to}`, // list of receivers
    subject:
      "Your Travel plan is ready and delivered to you thankyou for using tourMinder ", // Subject line
    text: body, // plain text body
  };
  transporter
    .sendMail(email_data)
    .then(() => {
      console.log("email sent");
    })
    .catch((err) => {
      console.log("error sending mail", err);
    });
}

emailRouter.post("/send-mail", async (req, res) => {
  const { email, body } = req.body;
  try {
    sendEmail(email, body);
    res.status(200).json("email sent successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = emailRouter;
