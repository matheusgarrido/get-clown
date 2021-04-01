import {
  Button,
  createMuiTheme,
  Dialog,
  DialogTitle,
  Grid,
} from '@material-ui/core';
import { DialogValues } from './dialogContent';
import './dialog.css';
import { useState } from 'react';

interface DialogComponentProps {
  open: boolean;
  setOpen: Function;
  getDialogValues: Function;
}

export const DialogComponent = ({
  open,
  setOpen,
  getDialogValues,
}: DialogComponentProps) => {
  const dialogCancel = () => {
    setOpen(false);
  };
  let valuesFilter = { radio: 'any', check: [''] };
  const getValues = (radio: string, check: string[]) => {
    valuesFilter.radio = radio;
    valuesFilter.check = check;
  };
  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth={true}
      onBackdropClick={() => dialogCancel()}
    >
      <DialogTitle id="simple-dialog-title">Filter</DialogTitle>
      <DialogValues getDialogValues={getValues} />
      <Grid container direction="row" justify="space-evenly">
        <Button
          size="small"
          variant={'contained'}
          id={'btnDialogCancel'}
          onClick={() => {
            dialogCancel();
          }}
        >
          Cancel
        </Button>
        <Button
          size="small"
          variant={'contained'}
          id={'btnDialogFilter'}
          onClick={() => {
            // console.log(valuesFilter);
            getDialogValues(valuesFilter);
            dialogCancel();
          }}
        >
          Filter
        </Button>
      </Grid>
    </Dialog>
  );
};
