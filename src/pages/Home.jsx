import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dragonball-api.com/api/characters?limit=6')
      .then(response => {
        setCharacters(response.data.items);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loader">⚡ Cargando personajes...</div>;

  return (
    <div className="home">
      <div className="hero">
        <h1>🐉 Dragon Ball Explorer</h1>
        <p>Explora el universo de Dragon Ball y descubre todos sus personajes</p>
      </div>
      
      <h2>Personajes Destacados</h2>
      <div className="character-grid">
        {characters.map(char => (
          <div key={char.id} className="character-card">
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;