# 🔴 Rick & Morty Gallery - Version Redux Toolkit

## 📋 Description

Application de galerie de personnages Rick & Morty utilisant **Redux Toolkit** pour une gestion d'état professionnelle et scalable.

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
rick-morty-redux/
├── src/
│   ├── store/
│   │   ├── charactersSlice.js       # Slice Redux avec actions/reducers
│   │   └── store.js                 # Configuration du store
│   ├── components/
│   │   ├── Header.jsx               # Header avec useSelector
│   │   ├── FilterBar.jsx            # Filtres avec dispatch
│   │   ├── CharacterCard.jsx        # Carte avec actions Redux
│   │   ├── CharacterGrid.jsx        # Grille avec thunk
│   │   └── FavoritesSidebar.jsx     # Sidebar avec selectors
│   ├── styles/
│   │   └── styles.css               # Styles globaux
│   ├── App.jsx                      # Composant principal
│   └── main.jsx                     # Point d'entrée avec Provider
```

---

## 🔧 Comment ça marche ?

### 1. Créer un Slice (`charactersSlice.js`)

```javascript
const charactersSlice = createSlice({
  name: 'characters',
  initialState: { characters: [], likedIds: [], filter: 'all' },
  reducers: {
    toggleLike: (state, action) => {
      // Logique immutable avec Immer
    }
  },
  extraReducers: (builder) => {
    // Gérer les actions async
  }
});
```

### 2. Configurer le Store (`store.js`)

```javascript
export const store = configureStore({
  reducer: {
    characters: charactersReducer
  }
});
```

### 3. Wrapper l'App (`main.jsx`)

```javascript
<Provider store={store}>
  <App />
</Provider>
```

### 4. Utiliser dans les Composants

```javascript
// Lire l'état
const likedIds = useSelector(selectLikedIds);

// Modifier l'état
const dispatch = useDispatch();
dispatch(toggleLike(id));
```

---

## 📦 Dépendances

```json
{
  "@reduxjs/toolkit": "^2.x.x",
  "react-redux": "^9.x.x"
}
```

---

## ✅ Avantages de Redux

- ✅ Standard de l'industrie
- ✅ Redux DevTools puissants
- ✅ `createAsyncThunk` pour les API calls
- ✅ État prévisible et testable
- ✅ Excellent pour les grandes applications
- ✅ Selectors optimisés (pas de re-render inutiles)

---

## ⚠️ Limitations

- ⚠️ Courbe d'apprentissage élevée
- ⚠️ Beaucoup de boilerplate
- ⚠️ Configuration initiale complexe
- ⚠️ Peut être overkill pour les petits projets

---

## 🎨 Fonctionnalités

- Chargement asynchrone avec `createAsyncThunk`
- Système de likes avec immutabilité (Immer)
- Filtrage optimisé avec selectors
- Sidebar des favoris avec selectors dérivés
- Performance optimale avec re-renders minimaux

---

## 🛠️ Concepts Redux Utilisés

- **Slice** - Combinaison de reducers et actions
- **Store** - État global centralisé
- **Actions** - Événements qui déclenchent des changements
- **Reducers** - Fonctions pures qui modifient l'état
- **Selectors** - Fonctions pour lire l'état de manière optimisée
- **Thunks** - Actions asynchrones pour les API calls

---

## 🌐 API Utilisée

- **Rick & Morty API**: `https://rickandmortyapi.com/api/character`
- Gérée avec `createAsyncThunk` pour les états loading/success/error

---

## 🔍 Redux DevTools

Pour débugger l'application, installez [Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/) dans votre navigateur.

Vous pourrez :
- Voir tous les états
- Inspecter les actions dispatchées
- Time-travel debugging
- Visualiser le diff entre les états

---

## 📚 Apprendre Plus

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)