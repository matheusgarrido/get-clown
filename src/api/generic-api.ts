import { Flags } from './schemas/flags';
import { getAxiosInstance } from './axios-instance';
import { Categories } from './schemas/categories';
import { Joke } from './schemas/joke';

const axios = getAxiosInstance();

interface ResourceReturn {
  getFlags: () => Promise<Flags>;
  getCategories: () => Promise<Categories>;
  getJoke: (category: string, flags: string[] | null) => Promise<Joke>;
}

export const genericController = (): ResourceReturn => {
  const getFlags = async (): Promise<Flags> => {
    const response = await axios.get(`/flags`).then((res) => res.data);
    const flags: Flags = response.flags;
    return flags;
  };
  const getCategories = async (): Promise<Categories> => {
    const response = await axios.get(`/categories`).then((res) => res.data);
    const categories: Categories = response.categories;
    return categories;
  };
  const getJoke = async (
    category: string,
    flags: string[] | null
  ): Promise<Joke> => {
    console.log(flags);
    const blacklistFlags = flags ? `?blacklistFlags=${flags.join(',')}` : '';
    console.log(blacklistFlags);
    const response = await axios
      .get(`/joke/${category}${blacklistFlags}`)
      .then((res) => res.data);
    const joke: Joke = response;
    return joke;
  };
  return { getFlags, getCategories, getJoke };
};
