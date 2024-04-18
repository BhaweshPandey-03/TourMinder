const express = require("express");
const aiRouter = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

aiRouter.post("/tour-planner", async (req, res) => {
  try {
    const { from, startDate, endDate, to } = req.body;
    const prompt = `plan a trip from ${from} to ${to} from date ${startDate} to ${endDate} `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    // const jsonData = JSON.parse(text);
    res.send({
      msg: "here is the data ",
      text,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      msg: "error occurred",
      err,
    });
  }
});

module.exports = aiRouter;