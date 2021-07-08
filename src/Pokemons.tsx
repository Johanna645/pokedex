import React, { useState, useEffect } from 'react';
import Link from 'react';

export function Pokemons() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://', {})
      .then((res) => res.json())
      .then((response) => {
        setData(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // TODO fix the urls to be right
  return (
    <>
      {!isLoading &&
        data.map((pokemon, index) => {
          return (
            <div key={index}>
              <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
            </div>
          );
        })}
    </>
  );
}
