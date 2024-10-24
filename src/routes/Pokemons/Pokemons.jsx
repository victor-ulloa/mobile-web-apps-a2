import { useEffect, useState } from "react";
import './PokemonList.css'; // Import the CSS for grid and card styling

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const response = await fetch(POKEAPI_URL);
      const data = await response.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setPokemons(detailedPokemons);
      setLoading(false);
    } catch (err) {
      setError("Error fetching Pokémon data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon, index) => (
        <div key={index} className="pokemon-card">
          <h3>{pokemon.name.toUpperCase()}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Base Experience: {pokemon.base_experience}</p>
          <p>Abilities:</p>
          <ul>
            {pokemon.abilities.map((abilityObj, idx) => (
              <li key={idx}>{abilityObj.ability.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}