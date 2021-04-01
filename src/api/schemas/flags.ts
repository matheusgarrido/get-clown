//https://v2.jokeapi.dev/flags
import { GenericSchema } from './genericSchema';

export interface Flags extends GenericSchema {
  flags: string[];
}
