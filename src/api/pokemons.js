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
