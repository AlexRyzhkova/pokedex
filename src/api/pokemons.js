export async function fetchPokemons() {
  const response = await fetch("https://unpkg.com/pokemons/pokemons.json");

  if (!response.ok) {
    throw new Error(response);
  }
  // response wird in result gespeichert und in json umgewandelt

  const result = await response.json();

  const allPokemons = result.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: pokemon.sprites.large,
    link: `#${pokemon.name.toLowerCase()}`,
  }));
  return allPokemons;
}

export async function fetchPokemon(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  const pokemon = {
    name: result.name,
    id: result.id,
    // imgSrc: result.sprites.front_default,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${result.name}.gif`,
    hp: result.stats[0]?.base_stat,
    attack: result.stats[1]?.base_stat,
    defense: result.stats[2]?.base_stat,
  };
  return pokemon;
}
