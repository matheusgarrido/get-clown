import { useMemo, useState } from 'react';
import { genericController } from '../../api/generic-api';
import { Flags } from '../../api/schemas/flags';

export const useFlags = (): Flags | undefined => {
  const [flags, setFlags] = useState<Flags>();

  const allFlags = useMemo(async () => {
    const f = await genericController().getFlags();
    setFlags(f);
  }, []);

  return flags;
};
