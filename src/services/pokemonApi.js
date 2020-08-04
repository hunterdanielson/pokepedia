export const fetchPokemon = (offset) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}`)
    .then(res => res.json());
};
