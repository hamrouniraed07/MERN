# Projet MERN - Applications React : Liste de Courses et Todo List

## Aperçu du Projet

Ce projet est une application web développée en React utilisant Vite comme outil de build. Il s'agit d'une interface utilisateur moderne et interactive qui propose deux applications principales : une **Liste de Courses** et une **Todo List**. L'application est conçue pour démontrer l'utilisation des hooks React modernes, la gestion d'état avec useReducer, et la persistance des données avec localStorage.

L'application principale (`App.jsx`) présente un écran d'accueil permettant à l'utilisateur de choisir entre les deux fonctionnalités. Chaque application est implémentée dans un composant séparé pour une meilleure organisation et maintenabilité du code.

## Fonctionnalités

### Liste de Courses (`ShoppingListApp.jsx`)
- **Ajouter des articles** : Saisir un nouvel article via un champ de texte et un bouton "Ajouter".
- **Marquer comme acheté** : Cocher/décocher les articles pour indiquer leur statut.
- **Supprimer des articles** : Bouton de suppression individuel pour chaque article.
- **Effacer les articles cochés** : Fonctionnalité pour nettoyer la liste des articles déjà achetés.
- Interface simple et intuitive avec styles inline pour une présentation claire.

### Todo List (`Todo.jsx`)
- **Ajouter des tâches** : Saisie de nouvelles tâches avec validation (pas de tâches vides).
- **Basculer l'état des tâches** : Marquer les tâches comme complétées ou non.
- **Supprimer des tâches** : Suppression individuelle des tâches.
- **Filtrage des tâches** : Options pour afficher toutes les tâches, seulement les actives, ou seulement les complétées.
- **Persistance des données** : Sauvegarde automatique des tâches dans le localStorage du navigateur.
- **Statistiques** : Affichage du nombre total de tâches et du nombre de tâches complétées.
- Gestion d'état avancée utilisant `useReducer` pour une logique centralisée.

## Structure du Projet

```
sawsen/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── ShoppingListApp.jsx    # Composant Liste de Courses
│   │   └── Todo.jsx               # Composant Todo List
│   ├── reducers/
│   │   └── todoReducer.jsx        # Reducer pour la gestion d'état des todos
│   ├── App.jsx                    # Composant principal avec écran d'accueil
│   ├── App.css
│   ├── index.css
│   └── main.jsx                   # Point d'entrée de l'application
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Technologies Utilisées

- **React 18** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- **Vite** : Outil de build rapide pour les applications web modernes.
- **JavaScript ES6+** : Utilisation des dernières fonctionnalités du langage.
- **Hooks React** : `useState`, `useReducer`, `useEffect` pour la gestion d'état et des effets.
- **localStorage** : API du navigateur pour la persistance des données côté client.
- **CSS inline** : Styles appliqués directement dans les composants pour la simplicité.

## Installation et Exécution

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation
1. Cloner le dépôt ou télécharger les fichiers du projet.
2. Ouvrir un terminal dans le répertoire racine du projet (`/home/raed/Desktop/polytech/MERN/Sawsen/sawsen`).
3. Installer les dépendances :
   ```bash
   npm install
   ```
4. Lancer l'application en mode développement :
   ```bash
   npm run dev
   ```
5. Ouvrir le navigateur et accéder à l'URL indiquée (généralement `http://localhost:5173`).

### Construction pour la production
Pour créer une version optimisée de l'application :
```bash
npm run build
```

## Utilisation

1. **Écran d'accueil** : Au lancement, choisissez entre "Ouvrir la Liste de Courses" ou "Ouvrir la Todo List".
2. **Liste de Courses** :
   - Saisissez un article dans le champ de texte et cliquez sur "Ajouter".
   - Cochez les articles achetés.
   - Utilisez "Supprimer" pour retirer un article ou "Effacer les articles cochés" pour nettoyer.
3. **Todo List** :
   - Ajoutez de nouvelles tâches via le champ de saisie.
   - Utilisez les boutons de filtre pour afficher les tâches souhaitées.
   - Les tâches sont automatiquement sauvegardées dans le navigateur.
4. **Navigation** : Utilisez le bouton "Retour à l'accueil" pour revenir à l'écran principal.

## Architecture et Conception

- **Composants modulaires** : Chaque fonctionnalité est encapsulée dans son propre composant.
- **Gestion d'état** : Utilisation de `useState` pour les états simples et `useReducer` pour les états complexes (Todo List).
- **Persistance** : Les données de la Todo List sont persistées localement pour une expérience utilisateur continue.
- **Interface utilisateur** : Design simple et responsive avec des styles inline, adapté pour une utilisation sur bureau et mobile.

## Auteur

**Sawsen** - Étudiant en Polytechnique, développement d'applications web MERN.

Ce projet a été réalisé dans le cadre d'un compte rendu pour démontrer les compétences en développement React, gestion d'état, et bonnes pratiques de programmation.

## Licence

Ce projet est destiné à des fins éducatives et peut être utilisé librement pour l'apprentissage et la démonstration.
