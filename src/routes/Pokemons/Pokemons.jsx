import { useEffect, useState } from "react";
import './PokemonList.css'; // Import the CSS for grid and card styling

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon?limit=10"; // API URL to fetch Pokémon data

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]); // State to hold the list of Pokémon
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error messages

  const fetchPokemons = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const response = await fetch(POKEAPI_URL); // Fetch Pokémon data from API
      const data = await response.json(); // Parse the response as JSON

      // Fetch detailed information for each Pokémon
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url); // Fetch details for each Pokémon
          return await res.json(); // Parse each Pokémon's detailed data
        })
      );

      setPokemons(detailedPokemons); // Update state with detailed Pokémon data
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      setError("Error fetching Pokémon data"); // Set error message if fetching fails
      setLoading(false); // Set loading to false if an error occurs
    }
  };

  useEffect(() => {
    fetchPokemons(); // Fetch Pokémon data when the component mounts
  }, []);

  if (loading) return <p>Loading...</p>; // Show loading message while fetching
  if (error) return <p>{error}</p>; // Show error message if fetching fails

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