import React, { useState, useEffect } from 'react';
import Link from 'react';

export function Details({ match: integer }) {
  const {
    params: { id },
  } = match;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {!isLoading && (
        <>
          <h1>Name: {data.name}</h1>
          <h2>Abilities: {data.abilities}</h2>
          <h2>Type: {data.type}</h2>
          <h2>Order: {data.order}</h2>
          <h2>Stats: {data.stats}</h2>
          <h2>Evolutions: {data.evolutions}</h2> {/*this might be wrong*/}
          <h2>Moves: {data.moves}</h2>
          <Link to="/">Back to main page</Link>
        </>
      )}
    </>
  );
}
