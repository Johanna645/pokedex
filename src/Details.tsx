import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from 'react-router-dom';

// React Router passes two props to all of its routed components: match props and location props.
// The match-parameter is of type RouteComponentProps, the content of it will be here of type MatchProps. Even if id is a number, the React Router doesn't do type conversions and  declares the parameters as string or undefined.

type MatchProps = { id: string };

type Data = {
  name: string;
  abilities: [
    {
      is_hidden: boolean;
      slot: number;
      ability: { name: string; url: string };
    },
  ];
  types: [{ slot: number; type: { name: string; url: string } }];
  order: number;
  stats: [
    { base_stat: number; effort: number; stat: { name: string; url: string } },
  ];
  /*evolutions:,*/
  moves: [
    {
      move: { name: string; url: string };
      version_group_details: [
        {
          level_learned_at: number;
          version_group: { name: string; url: string };
          move_learn_method: { name: string; url: string };
        },
      ];
    },
  ];
};

export function Details({ match }: RouteComponentProps<MatchProps>) {
  const {
    params: { id },
  } = match;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();

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
          <h2>Abilities: </h2>
          <p>
            {data.abilities &&
              data.abilities
                .map(
                  (abilityObject: { ability: { name: string; url: string } }) =>
                    abilityObject.ability.name,
                )
                .join(', ')}
          </p>
          <h2>Types: </h2>
          <p>
            {data.types &&
              data.types
                .map(
                  (typeObject: { type: { name: string; url: string } }) =>
                    typeObject.type.name,
                )
                .join(', ')}
          </p>
          <h2>Order: {data.order}</h2>
          <h2>Stats: </h2>
          <p>
            {data.stats &&
              data.stats
                .map(
                  (statsObject: { stat: { name: string; url: string } }) =>
                    statsObject.stat.name,
                )
                .join(', ')}
          </p>
          <h2>Evolutions: </h2> {/*this needs to still be figured out*/}
          <h2>Moves: </h2>
          <p>
            {data.moves &&
              data.moves
                .map(
                  (movesObject: { move: { name: string; url: string } }) =>
                    movesObject.move.name,
                )
                .join(', ')}
          </p>
          <Link to="/">Back to main page</Link>
        </>
      )}
    </>
  );
}
