import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/search-investors", async (req, res) => {
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
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5
    });

    res.json({
      result: response.choices[0].message.content
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch investors" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
