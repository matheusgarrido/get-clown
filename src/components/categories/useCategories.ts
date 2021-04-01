import { useMemo, useState } from 'react';
import { genericController } from '../../api/generic-api';
import { Categories } from '../../api/schemas/categories';

export const useCategories = (): Categories | undefined => {
  const [categories, setCategories] = useState<Categories>();

  const categ = useMemo(async () => {
    const c = await genericController().getCategories();
    setCategories(c);
  }, []);
  return categories;
};
