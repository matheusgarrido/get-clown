import { useEffect, useMemo, useState } from 'react';
import { genericController } from '../../api/generic-api';
import { Joke } from '../../api/schemas/joke';

export const useJoke = (
  categories: string,
  flags: string[] | null
): Joke | undefined => {
  const [joke, setJoke] = useState<Joke>();
  useEffect(() => {
    const a = async () => {
      const j = await genericController().getJoke(categories, flags);
      setJoke(j);
    };
    a();
  }, [categories, flags]);
  return joke;
};
