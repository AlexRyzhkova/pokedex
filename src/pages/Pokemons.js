import React, { useEffect } from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";
import ListItemText from "../components/ListItemText";
import { fetchPokemons } from "../api/pokemons";
import LoadingScreen from "../components/LoadingScreen";

function Pokemons() {
  // React.Useatete setzt den ersten wert auf null
  const [pokemons, setPokemons] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  // const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading || pokemons === null) {
    return <LoadingScreen />;
  }

  // const filteredPokemons = pokemons.filter((pokemon) => {
  //     return pokemon.name.toLowerCase().startsWith(query.toLowerCase());
  //   });

  return (
    <>
      <header>
        <span className="title">Pokemon</span> <input placeholder="🔎 Search" />
      </header>
      <main className="colorful-border">
        <List>
          {pokemons?.map((pokemon) => (
            <ListItem key={pokemon.id} href={pokemon.link}>
              <ListItemIcon
                src={pokemon.imgSrc}
                alt={`Picture of ${pokemon.name}`}
              />
              <ListItemText
                primary={pokemon.name}
                secondary={`#${pokemon.id}`}
              />
            </ListItem>
          ))}
        </List>
      </main>
    </>
  );
}
export default Pokemons;
