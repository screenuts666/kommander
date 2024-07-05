const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/api/generate-image", async (req, res) => {
  const prompt = req.query.prompt;
  if (!prompt) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations", // URL dell'endpoint dell'API
      {
        prompt: prompt,
        n: 1,
        size: "512x512",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.data && response.data.data.length > 0) {
      res.json(response.data.data[0].url);
    } else {
      res.status(500).send("Image generation failed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating image");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
