//https://v2.jokeapi.dev/categories

import { GenericSchema } from './genericSchema';

export interface Categories extends GenericSchema {
  categories: string[];
}
