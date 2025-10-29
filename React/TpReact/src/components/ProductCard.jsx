function ProductCard({ name, price, category }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px 0',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
        {name}
      </h3>
      <p style={{ 
        fontSize: '20px', 
        fontWeight: 'bold', 
        color: '#2ecc71',
        margin: '10px 0'
      }}>
        {price} €
      </p>
      <p style={{ 
        fontSize: '14px', 
        color: '#666',
        backgroundColor: '#f0f0f0',
        padding: '5px 10px',
        borderRadius: '4px',
        display: 'inline-block'
      }}>
        {category}
      </p>
    </div>
  );
}

export default ProductCard;