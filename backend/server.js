import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DEBUG: Check environment loading
console.log("API KEY LOADED:", !!process.env.OPENAI_API_KEY);
console.log("PORT:", process.env.PORT);

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});

app.post("/search-investors", async (req, res) => {
  console.log("Incoming Request Body:", req.body);

  const { sector, country } = req.body;

  if (!sector || !country) {
    return res.status(400).json({ error: "Sector and Country are required" });
  }

  try {
    const prompt = `
Suggest 3 investors who invest in the ${sector} sector in ${country}.
Give one-line reasoning for each.
`;

    const response = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5
    });

    console.log("OpenAI Success");

    res.json({
      result: response.choices[0].message.content
    });

  } catch (error) {
    console.error("==== OPENAI ERROR ====");
    console.error(error);
    console.error("Message:", error.message);
    console.error("Status:", error.status);
    console.error("Response Data:", error.response?.data);

    res.status(500).json({
      error: error.message || "OpenAI request failed"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
