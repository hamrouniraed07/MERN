# 🎯 Rick & Morty Gallery - Version Context API

## 📋 Description

Application de galerie de personnages Rick & Morty utilisant **React Context API** pour la gestion d'état global.

---

## 🚀 Installation

```bash
npm install
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

---

## 📂 Structure du Projet

```
rick-morty-context/
├── src/
│   ├── context/
│   │   └── CharactersContext.jsx    # Context Provider + Hook
│   ├── components/
│   │   ├── Header.jsx               # Header avec compteur de likes
│   │   ├── FilterBar.jsx            # Filtres (All/Alive/Dead/Unknown)
│   │   ├── CharacterCard.jsx        # Carte d'un personnage
│   │   ├── CharacterGrid.jsx        # Grille de personnages
│   │   └── FavoritesSidebar.jsx     # Sidebar des favoris
│   ├── styles/
│   │   └── styles.css               # Styles globaux
│   ├── App.jsx                      # Composant principal
│   └── main.jsx                     # Point d'entrée avec Provider
```

---

## 🔧 Comment ça marche ?

### 1. Créer le Context (`CharactersContext.jsx`)

```javascript
const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Logique de l'état...
  
  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
```

### 2. Wrapper l'App (`main.jsx`)

```javascript
<CharactersProvider>
  <App />
</CharactersProvider>
```

### 3. Utiliser dans les Composants

```javascript
const { likedIds, toggleLike } = useCharacters();
```

---

## 📦 Dépendances

- **React 18** - Framework
- **Vite** - Build tool
- **Aucune dépendance externe pour la gestion d'état!**

---

## ✅ Avantages de Context

- ✅ Aucune dépendance externe
- ✅ Simple à comprendre
- ✅ Intégré à React
- ✅ Parfait pour les petits projets

---

## ⚠️ Limitations

- ⚠️ Tous les composants re-render à chaque changement
- ⚠️ Pas de DevTools dédiés
- ⚠️ Peut devenir complexe avec beaucoup d'états

---

## 🎨 Fonctionnalités

- Chargement de 20 personnages depuis l'API
- Système de likes avec cœur
- Filtrage par statut (Alive/Dead/Unknown)
- Sidebar des favoris
- Design moderne et responsive

---

## 🌐 API Utilisée

- **Rick & Morty API**: `https://rickandmortyapi.com/api/character`

---

## 📚 Apprendre Plus

- [React Context Documentation](https://react.dev/reference/react/useContext)
- [Lifting State Up](https://react.dev/learn/sharing-state-between-components)