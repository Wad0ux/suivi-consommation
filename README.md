# Projet : Suivi de Consommation

## 🚀 Déploiement

### Backend (Render)
1. Crée un nouveau service Web sur Render.
2. Ajoute une base PostgreSQL.
3. Définis la variable d’environnement `DATABASE_URL` avec l’URL de la base.
4. Lance `npm install` puis `node index.js`.

### Frontend (GitHub Pages)
1. Va sur GitHub > Settings > Pages
2. Sélectionne le dossier `/frontend`
3. Ton site sera accessible sur https://TON-NOM.github.io/projet/

## 🔒 Admin
Mot de passe admin : `admin123`

## 🔧 Table SQL
Utilise ce script SQL dans ta base PostgreSQL sur Render :
```
CREATE TABLE IF NOT EXISTS consommations (
  id SERIAL PRIMARY KEY,
  client TEXT NOT NULL,
  produit TEXT NOT NULL,
  quantite INTEGER NOT NULL,
  date TIMESTAMP DEFAULT NOW()
);```