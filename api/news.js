const axios = require("axios");

module.exports = async (req, res) => {
  const query = req.query.q || "latest";
  const apiKey = process.env.NEWS_API_KEY; // ✅ Get from environment

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message); // Helpful for debugging
    res.status(500).json({ error: "Failed to fetch news" });
  }
};
