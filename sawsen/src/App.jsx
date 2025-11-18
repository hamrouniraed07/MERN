import { useState } from 'react'
import './App.css'
import ShoppingListApp from './components/ShoppingListApp'
import Todo from './components/Todo'

function App() {
  const [activeApp, setActiveApp] = useState(null)

  const handleBack = () => setActiveApp(null)

  return (
    <div className="App">
      {!activeApp ? (
        <div
          style={{
            textAlign: 'center',
            padding: '50px',
            color: 'white'
          }}
        >
          <h1>Bienvenue</h1>
          <p>Choisissez une application à ouvrir :</p>
          <div style={{ marginTop: '30px' }}>
            <button
              onClick={() => setActiveApp('shopping')}
              style={{
                padding: '15px 30px',
                fontSize: '18px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                marginRight: '20px'
              }}
            >
              Ouvrir la Liste de Courses
            </button>

            <button
              onClick={() => setActiveApp('todo')}
              style={{
                padding: '15px 30px',
                fontSize: '18px',
                backgroundColor: '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
            >
              Ouvrir la Todo List
            </button>
          </div>
        </div>
      ) : (
        <div>
          {activeApp === 'shopping' && <ShoppingListApp />}
          {activeApp === 'todo' && <Todo />}

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button
              onClick={handleBack}
              style={{
                padding: '12px 25px',
                fontSize: '16px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Retour à l’accueil
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
