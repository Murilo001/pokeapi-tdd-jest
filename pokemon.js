const fetch = require('node-fetch');

const getPokemon = async (pokemonName) => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon/' + pokemonName)
  return response.json();
}

const getPokemonMaisPesado = async (primeiroPokemon, segundoPokemon) => {
  const responsePrimeiroPokemon = await fetch(
    'https://pokeapi.co/api/v2/pokemon/' + primeiroPokemon)
  const responseSegundoPokemon = await fetch(
    'https://pokeapi.co/api/v2/pokemon/' + segundoPokemon)
  const objetoPrimeiroPokemon = await responsePrimeiroPokemon.json();
  const objetoSegundoPokemon = await responseSegundoPokemon.json();
  if (objetoPrimeiroPokemon.weight > objetoSegundoPokemon.weight)
    return objetoPrimeiroPokemon.name;
  else if (objetoPrimeiroPokemon.weight < objetoSegundoPokemon.weight)
    return objetoSegundoPokemon.name;
  else
    return null;
}

module.exports = {
  getPokemon,
  getPokemonMaisPesado
}