import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/askGPT', async (req, res) => {
  try {
    const { input } = req.body;
    const response = await openai.responses.create({
      model: 'gpt-3.5-turbo',
      input: input,
    });
    res.status(200).json({
      message: response.output_text,
    });
  } catch (error) {
    console.error('Error in /askGPT:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(3001, () => {
  console.log('Backend server running on http://localhost:3001');
});