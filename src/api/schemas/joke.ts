//https://v2.jokeapi.dev/joke/any
//https://v2.jokeapi.dev/joke/programming
import { GenericSchema } from './genericSchema';

export interface Joke extends GenericSchema {
  category: string;
  type: string;
  setup: string | null;
  delivery: string | null;
  joke: string | null;
  flags: boolean[];
  id: number;
  safe: boolean;
  lang: string;
}
