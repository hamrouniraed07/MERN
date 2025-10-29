import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import Badge from './components/Badge';
import ProductCard from './components/ProductCard';

function App() {
  const articles = [
    {
      id: 1,
      title: "Introduction à React",
      author: "Alice",
      content: "React est une bibliothèque JavaScript pour construire des interfaces utilisateur modernes et réactives."
    },
    {
      id: 2,
      title: "Qu'est-ce que Vite ?",
      author: "Bob",
      content: "Vite est un outil de build ultra-rapide qui améliore drastiquement l'expérience de développement."
    },
    {
      id: 3,
      title: "Les Composants en React",
      author: "Charlie",
      content: "Les composants sont les briques de base de React. Ils permettent de diviser l'interface en morceaux réutilisables."
    },
    {
      id: 4,
      title: "Le JSX en Pratique",
      author: "Alice",
      content: "JSX est une syntaxe qui ressemble à HTML mais qui est en fait du JavaScript transformé."
    }
  ];
  const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronique" },
    { id: 2, name: "Souris", price: 25, category: "Accessoires" },
    { id: 3, name: "Clavier", price: 75, category: "Accessoires" },
    { id: 4, name: "Écran", price: 350, category: "Electronique" },
    { id: 5, name: "Webcam", price: 80, category: "Electronique" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', flex: 1 }}>
        <Header 
          title="Mon Blog React"
          subtitle="Apprendre React avec des exemples pratiques"
        />
        
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
          <strong>{articles.length}</strong> articles disponibles
        </div>

        {articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            author={article.author}
            content={article.content}
          />
        ))}
      </div>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Liste des Produits
      </h1>
      
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
        />
      ))}

       <Badge text="Nouveau" color="green" />
      <Badge text="Populaire" color="red" />
      <Badge text="Tendance" />

      <Footer
        author="Ecole Polytechnique Sousse"
        year={currentYear}
      />
    </div>
  );
}

export default App;