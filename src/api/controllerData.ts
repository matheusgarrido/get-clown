import { Joke } from './schemas/joke';
interface ControllerDefs {
  detailsData: string[];
}

const controllerData: Map<string, string[]> = new Map();

controllerData.set('joke', ['category', 'type', 'setup', 'delivery', 'joke']);

export const getJokeData = (): string[] | null => {
  const column = controllerData.get('joke');
  if (!column) return null;
  else return column;
};
