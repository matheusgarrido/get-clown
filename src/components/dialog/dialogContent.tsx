import {
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  ThemeProvider,
} from '@material-ui/core';
import { ChangeEvent, useEffect, useState } from 'react';
import { useCategories } from '../categories/useCategories';
import { useFlags } from '../flags/useFlags';
import { checkBoxTheme, radioButtonTheme } from './dialogTheme';
import './dialog.css';

interface DialogValuesProps {
  getDialogValues: Function;
}

export const DialogValues = ({ getDialogValues }: DialogValuesProps) => {
  const category = useCategories();
  const flags = useFlags();
  const [radioValue, setRadioValue] = useState('Any');
  const [checkValues, setCheckValues] = useState<string[]>([]);

  useEffect(() => {
    getDialogValues(radioValue, checkValues);
  }, [checkValues, radioValue]);

  if (!category || !flags)
    return (
      <Grid container justify={'center'}>
        <CircularProgress />
      </Grid>
    );

  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  const handleChangeCheck = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    if (checked) {
      setCheckValues([...checkValues, name]);
    } else {
      const index = checkValues.indexOf(name);
      let check = checkValues;
      for (let i = 0; i < check.length; i++) {
        if (i === index) {
          check.splice(i, 1);
        }
      }
      setCheckValues([...check]);
    }
  };

  return (
    <FormControl component="fieldset">
      <Grid container direction="row" justify="space-around">
        <RadioGroup
          aria-label="category"
          name="category"
          value={radioValue}
          onChange={handleChangeRadio}
        >
          <FormLabel component="legend" focused={false}>
            Category
          </FormLabel>
          <ThemeProvider theme={radioButtonTheme}>
            {Object.entries(category).map((res) => {
              return (
                <FormControlLabel
                  key={res[1]}
                  value={res[1]}
                  control={<Radio />}
                  label={res[1]}
                  checked={res[1] === radioValue ? true : false}
                />
              );
            })}
          </ThemeProvider>
        </RadioGroup>

        <FormGroup>
          <FormLabel component="label" focused={false}>
            Flags
          </FormLabel>
          <ThemeProvider theme={checkBoxTheme}>
            {Object.entries(flags).map((res) => (
              <FormControlLabel
                key={res[1]}
                control={
                  <Checkbox
                    checked={checkValues.includes(res[1])}
                    onChange={handleChangeCheck}
                    name={res[1]}
                  />
                }
                label={res[1]}
              />
            ))}
          </ThemeProvider>
        </FormGroup>
      </Grid>
    </FormControl>
  );
};
