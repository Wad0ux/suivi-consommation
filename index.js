const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === 'admin123') {
    res.send({ token: 'admin-token' });
  } else {
    res.status(401).send({ message: 'Mot de passe incorrect' });
  }
});

app.post('/consommation', async (req, res) => {
  const { client, produit, quantite } = req.body;
  await pool.query('INSERT INTO consommations (client, produit, quantite, date) VALUES ($1, $2, $3, NOW())',
    [client, produit, quantite]);
  res.status(201).send({ message: 'Ajouté' });
});

app.get('/consommation', async (req, res) => {
  const result = await pool.query('SELECT * FROM consommations ORDER BY date DESC');
  res.json(result.rows);
});

app.listen(port, () => console.log(`Serveur en ligne sur port ${port}`));
