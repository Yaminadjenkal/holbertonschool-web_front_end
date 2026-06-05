# Cookies & Web Storage

Ce projet a pour objectif de comprendre et manipuler les **cookies**, le **localStorage** et le **sessionStorage** en JavaScript.  
Tu vas apprendre à stocker des informations dans le navigateur, les lire, les modifier et les supprimer.

---

## 📚 Objectifs d’apprentissage

À la fin de ce projet, vous serez capable de :

- Créer des **cookies** en JavaScript
- Configurer un cookie (expiration, chemin…)
- Lire les cookies depuis `document.cookie`
- Utiliser la librairie **js-cookie**
- Comprendre et utiliser **localStorage**
- Comprendre et utiliser **sessionStorage**
- Faire la différence entre les deux systèmes de stockage

---

## 🧠 Concepts importants

### 🍪 Cookies
- Stockés par le navigateur
- Envoyés automatiquement au serveur
- Peuvent avoir une date d’expiration
- Format : `document.cookie = "clé=valeur; expires=..."`

### 📦 Web Storage
#### `localStorage`
- Stockage **permanent**
- Persiste même après fermeture du navigateur

#### `sessionStorage`
- Stockage **temporaire**
- Disparaît quand l’onglet est fermé

---

## 🗂️ Structure du projet

- `package.json` — configuration du projet
- `0-index.html` — création et affichage de cookies
- `1-index.html` — suppression de cookies
- `2-index.html` — affichage conditionnel selon cookies
- `3-index.html` — utilisation de localStorage
- `4-index.html` — utilisation de sessionStorage
- `src/index.js` — **doit rester vide** (tout le JS est dans les fichiers HTML)

---

## 📝 Exigences

- Tous les fichiers doivent se terminer par une nouvelle ligne
- Code en JavaScript vanilla
- Utilisation de `<script>` dans les fichiers HTML
- Compatible Node 20.x et npm 10.x
- Utilisation de Webpack Dev Server pour lancer le projet :

