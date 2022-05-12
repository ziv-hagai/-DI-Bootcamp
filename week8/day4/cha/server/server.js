
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 7000, () => {
  console.log(`listen on port ${process.env.PORT || 7000}`);
})

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express')
})

app.post('/api/world', (req, res) => {
  const { text } = req.body;
  res.send(`I received your POST request. This is what you sent me: ${text}`)
})

