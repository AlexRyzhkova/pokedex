import React, { useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import { fetchPokemons } from "./api/pokemons";
import LoadingScreen from "./components/LoadingScreen";

// function waitFor(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

function App() {
  // React.Useatete setzt den ersten wert auf null
  const [pokemons, setPokemons] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

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

  // mount das erste mal rendern
  return (
    <div className="app">
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
      <footer>Tabs</footer>
    </div>
  );
}

export default App;
