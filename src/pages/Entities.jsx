import { useState, useEffect } from 'react';
import axios from 'axios';

function Entities() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dragonball-api.com/api/characters?limit=20')
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
    <div className="entities">
      <h1>📜 Todos los Personajes</h1>
      <div className="entities-list">
        {characters.map(char => (
          <div key={char.id} className="entity-card">
            <img src={char.image} alt={char.name} />
            <div className="entity-info">
              <h3>{char.name}</h3>
              <p><strong>Raza:</strong> {char.race}</p>
              <p><strong>Ki:</strong> {char.ki}</p>
              <p><strong>Género:</strong> {char.gender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entities;