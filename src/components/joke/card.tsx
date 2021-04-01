import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
} from '@material-ui/core';
import './card.css';
import { JokeComponent } from './joke';
import { DialogComponent } from '../dialog/dialog';
import { useEffect, useMemo, useState } from 'react';
import { genericController } from '../../api/generic-api';
import { Joke } from '../../api/schemas/joke';

interface DialogValuesProps {
  radio: string;
  check: string[];
}

export const CardComponent = () => {
  const [open, setOpen] = useState(true);
  const [joke, setJoke] = useState<Joke>();
  const [category, setCategory] = useState<string>('any');
  const [flags, setFlags] = useState<string[] | null>(null);

  const getJoke = () => {
    const j = async () => {
      const newJoke = await genericController().getJoke(category, flags);
      setJoke(newJoke);
    };
    j();
  };
  useEffect(() => {
    const j = async () => getJoke();
    j();
  }, []);

  if (!joke) return <CircularProgress />;
  const getDialogValues = ({ radio, check }: DialogValuesProps) => {
    setCategory(radio);
    setFlags(check);
    getJoke();
  };
  return (
    <>
      <Card id={'card'}>
        <CardContent>
          <JokeComponent joke={joke} />
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant={'contained'}
            id={'btnNewJoke'}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              setJoke(undefined);
              getJoke();
            }}
          >
            Tell Me More
          </Button>
        </CardActions>
      </Card>
      <Button
        size="small"
        variant={'contained'}
        id={'btnFilter'}
        onClick={() => {
          setOpen(true);
        }}
      >
        Filter
      </Button>
      <DialogComponent
        open={open}
        setOpen={setOpen}
        getDialogValues={getDialogValues}
      />
    </>
  );
};
