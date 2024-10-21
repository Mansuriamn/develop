const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const _dirname = path.resolve();
const info = [
  {
    name: "Aman",
    surname: "mansuri"
  },
  {
    name: "jon",
    surname: "Ansari"
  },
  {
    name: "lucky",
    surname: "Namdev"
  }
];

app.get('/info', (req, res) => {
  res.json(info);
});

app.use(express.static(path.join(_dirname, "/frontend/dist")));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`connection is http://localhost:${PORT}`);
});
