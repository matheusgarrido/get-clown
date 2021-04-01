import { Typography } from '@material-ui/core';
import { useState } from 'react';
import { Joke } from '../../api/schemas/joke';

interface jokeProps {
  joke: Joke;
}

export const JokeComponent = (props: jokeProps) => {
  const { joke } = props;
  return (
    <>
      <div className="card--title">
        <Typography gutterBottom>{joke.category.toUpperCase()}</Typography>
      </div>
      <div className="card--content">
        <GetJoke joke={joke} />
      </div>
    </>
  );
};

const GetJoke = (props: jokeProps) => {
  const [showJoke, setShowJoke] = useState(false);
  const { joke } = props;
  switch (joke.type) {
    case 'twopart':
      if (!showJoke)
        return (
          <>
            <Typography variant="h5">{joke.setup}</Typography>
            <span
              id={'hidden-delivery'}
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                setShowJoke(true)
              }
            >
              ???
            </span>
          </>
        );
      return (
        <>
          <Typography variant="h5">{joke.setup}</Typography>
          <Typography>{joke.delivery}</Typography>
        </>
      );

    default:
      return (
        <>
          <Typography variant="h5">{joke.joke}</Typography>
        </>
      );
  }
};
