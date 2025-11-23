# 🚀 Rick & Morty Gallery - Comparaison des Solutions de Gestion d'État

## 📋 Description du Projet

Ce projet compare **3 solutions différentes** de gestion d'état global en React en implémentant la même application de galerie de personnages Rick & Morty.

### Fonctionnalités de l'Application

- ✅ Chargement de 20 personnages depuis l'API Rick & Morty
- ✅ Affichage en grille avec image, nom et statut
- ✅ Système de likes (❤️) pour chaque personnage
- ✅ Header affichant le nombre total de likes
- ✅ Barre latérale des personnages favoris
- ✅ Filtrage par statut (Alive/Dead/Unknown/All)

---

## 📂 Structure des Projets

```
MERN_S8/
├── README.md 
├── rick-morty-context/     # Version 1: React Context API
├── rick-morty-redux/       # Version 2: Redux Toolkit
└── rick-morty-zustand/     # Version 3: Zustand
```

---

## 🔍 Comparaison Détaillée

### 1️⃣ React Context API

**📦 Installation**
```bash
# Aucune dépendance externe 
```

**✅ Avantages**
- Aucune dépendance externe
- Facile à comprendre pour les débutants
- Idéal pour les petits projets
- Bien intégré à React

**❌ Inconvénients**
- Tous les composants consommateurs re-render à chaque changement
- Pas de DevTools dédiés
- Peut devenir complexe avec beaucoup d'états
- Nécessite un Provider wrapper

**📊 Lignes de code:** ~80 lignes

---

### 2️⃣ Redux Toolkit

**📦 Installation**
```bash
npm install @reduxjs/toolkit react-redux
```

**✅ Avantages**
- Standard de l'industrie
- Excellent pour les grandes applications
- Redux DevTools très puissants
- Gestion d'état prévisible et testable
- `createAsyncThunk` pour les appels API

**❌ Inconvénients**
- Courbe d'apprentissage élevée
- Beaucoup de boilerplate (slices, actions, reducers)
- Configuration initiale complexe
- Peut être overkill pour les petits projets

**📊 Lignes de code:** ~100 lignes

---

### 3️⃣ Zustand 🏆 (RECOMMANDÉ)

**📦 Installation**
```bash
npm install zustand
```

**✅ Avantages**
- **Extrêmement simple** - Le code le plus concis
- **Pas de Provider** nécessaire!
- Performance optimale (re-render minimal)
- Async/await natif
- TypeScript excellent
- Facile à tester
- Moderne et léger (1kb)

**❌ Inconvénients**
- Moins connu que Redux
- Communauté plus petite
- Moins de ressources d'apprentissage

**📊 Lignes de code:** ~60 lignes

---

## 📈 Tableau Comparatif

| Critère | Context | Redux | Zustand |
|---------|---------|-------|---------|
| **Installation** | Rien | 2 packages | 1 package |
| **Provider requis** | ✅ Oui | ✅ Oui | ❌ Non |
| **Complexité** | Moyenne | Haute | Faible |
| **Performance** | ⚠️ Moyenne | ✅ Excellente | ✅ Excellente |
| **Lignes de code** | 80 | 100 | 60 |
| **Courbe apprentissage** | Facile | Difficile | Très facile |
| **DevTools** | ❌ Non | ✅ Excellent | ⚠️ Basique |
| **Async** | useEffect | createAsyncThunk | async/await |
| **Best for** | Petits projets | Grandes apps | Tous projets |

---

## 🚦 Lancer les Projets

### Version Context
```bash
cd rick-morty-context
npm install
npm run dev
```

### Version Redux
```bash
cd rick-morty-redux
npm install
npm run dev
```

### Version Zustand
```bash
cd rick-morty-zustand
npm install
npm run dev
```

---

## 💡 Recommandation

### Pour ce TP : **Zustand** 🏆

**Pourquoi ?**
- Code le plus simple et lisible
- Pas de Provider à configurer
- Performance optimale out-of-the-box
- Async/await naturel
- Moins de lignes de code = moins d'erreurs

### Utiliser Redux si :
- Vous travaillez sur une très grande application
- Vous avez besoin de Redux DevTools avancés
- Votre équipe connaît déjà Redux
- État très complexe avec beaucoup de logique

### Utiliser Context si :
- Projet très simple
- Vous ne voulez pas de dépendances externes
- État global minimal (theme, user)

---

## 🛠️ Technologies Utilisées

- **React 18** - Framework UI
- **Vite** - Build tool
- **Rick & Morty API** - Source de données
- **CSS Vanilla** - Styling (partagé entre les 3 versions)

---

## 📚 Ressources

- [React Context Documentation](https://react.dev/reference/react/useContext)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Rick & Morty API](https://rickandmortyapi.com/)

---

## 👨‍💻 Auteur

**Projet réalisé dans le cadre du cours MERN - Semaine 8**
Ecole Polytechnique de Sousse

---

## 📝 Notes

- Le CSS est identique dans les 3 versions
- La structure des composants est similaire
- Seule la gestion d'état diffère
- Tous utilisent la même API Rick & Morty

---

## 🎯 Conclusion

Après avoir testé les 3 solutions, vous pouvez constater que :

1. **Context** = Simple mais limité
2. **Redux** = Puissant mais complexe
3. **Zustand** = Le meilleur compromis simplicité/puissance

**Zustand est le futur de la gestion d'état en React!** 🚀
