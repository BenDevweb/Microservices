# Finance App — Application de Gestion Financière

Une application full-stack moderne permettant de suivre ses revenus et dépenses. Développée avec un backend **FastAPI** et un frontend **ReactJS**, elle offre une interface simple et réactive pour créer et consulter des transactions financières.

---

## Fonctionnalités

- Ajouter des transactions (revenus ou dépenses)
- Visualiser l'historique des transactions sous forme de tableau
- Distinction claire entre revenus et dépenses
- Communication en temps réel entre le frontend et le backend via une API REST
- Base de données SQLite légère et embarquée

---

## Stack Technique

| Couche | Technologie |
|--------|-------------|
| Backend | [FastAPI](https://fastapi.tiangolo.com/) — Framework Python moderne et performant |
| ORM | [SQLAlchemy](https://www.sqlalchemy.org/) — Gestion de la base de données |
| Base de données | SQLite — Base de données relationnelle légère |
| Frontend | [ReactJS](https://react.dev/) — Bibliothèque JavaScript pour interfaces utilisateur |
| Requêtes HTTP | [Axios](https://axios-http.com/) — Client HTTP pour le frontend |
| Styling | [Bootstrap](https://getbootstrap.com/) — Framework CSS responsive |

---

## Structure du Projet

```
Microservices/
├── FastAPI/                  # Backend API
│   ├── main.py               # Points d'entrée FastAPI (routes)
│   ├── models.py             # Modèles SQLAlchemy (Transaction)
│   ├── database.py           # Configuration de la base SQLite
│   └── finance.db            # Fichier de base de données SQLite
├── React/
│   └── finance-app/          # Frontend React
│       ├── src/
│       │   ├── App.js        # Composant principal (formulaire + tableau)
│       │   └── api.js        # Configuration Axios (baseURL)
│       └── package.json      # Dépendances React
└── README.md                 # Ce fichier
```

---

## Prérequis

- [Python 3.9+](https://www.python.org/downloads/)
- [Node.js 18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (fourni avec Node.js)

---

## Installation & Démarrage

### 1. Backend — FastAPI

```bash
cd FastAPI

# Créer un environnement virtuel (recommandé)
python -m venv venv

# Activer l'environnement virtuel
# Windows :
venv\Scripts\activate
# macOS/Linux :
# source venv/bin/activate

# Installer les dépendances
pip install fastapi uvicorn sqlalchemy pydantic

# Lancer le serveur
uvicorn main:app --reload
```

L'API sera disponible sur : `http://localhost:8000`

---

### 2. Frontend — React

```bash
cd React/finance-app

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

L'application sera accessible sur : `http://localhost:3000`

> Le frontend est configuré pour communiquer avec le backend sur `http://localhost:8000` via CORS.

---

## Endpoints API

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `POST` | `/transactions/` | Créer une nouvelle transaction |
| `GET` | `/transactions` | Récupérer la liste des transactions (avec pagination skip/limit) |

### Modèle de Transaction

```json
{
  "amount": 1500.00,
  "category": "Salaire",
  "description": "Salaire mensuel",
  "is_income": true,
  "date": "2025-01-15"
}
```

---

## Configuration CORS

Le backend autorise les requêtes provenant du frontend React via le middleware CORS configuré pour `http://localhost:3000`.

---

## Aperçu de l'Application

- **Navbar** : En-tête avec le titre *Finance App*
- **Formulaire** : Saisie du montant, catégorie, description, type (revenu/dépense) et date
- **Tableau** : Affichage de l'ensemble des transactions avec distinction visuelle Revenu/Dépense

---

## Auteur

Projet développé dans le cadre d'une architecture microservices / fullstack avec FastAPI et ReactJS.


