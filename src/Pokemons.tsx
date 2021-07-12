import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from 'react-router-dom';

export function Pokemons() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10', {})
      .then((res) => res.json())
      .then((response) => {
        setData(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {!isLoading &&
        data.map((pokemon: any, index: number) => {
          return (
            <div key={index}>
              <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
            </div>
          );
        })}
    </>
  );
}
