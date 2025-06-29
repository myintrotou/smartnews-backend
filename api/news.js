// api/news.js
const axios = require("axios");

module.exports = async (req, res) => {
  const query = req.query.q || "latest";
  const apiKey = "585704a57d45421ea833bc5afa6e857d";

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
};