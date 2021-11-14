import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { MoodboardContext } from '../../contexts/MoodboardContext';
// import ErrorBoundary from "./../../components/error-boundary/ErrorBoundary";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formRow: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const schema = yup.object().shape({
  name: yup.string().required(),
});

function MoodboardForm() {
  const classes = useStyles();
  // let { id } = useParams();


  const { addMoodboard, updateMoodboard } = useContext(MoodboardContext);
  const { handleSubmit, errors, control, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues,
  });

  // console.log("formState", formState);
  const { isDirty, isValid } = formState;

  if (initialValues && !populated) {
    // initialValues.name = initialValues.name / 100;
    reset({
      ...initialValues,
      name: (initialValues.name / 100).toFixed(2),
    });
    setPopulated(true);
  }

  // console.log("errors", errors);
  const onSubmit = async (formValues) => {
    console.log('formValues', formValues);
    // formValues._id = id; // pulled from the URL using router 'useParams' hook

    if (formValues.name) {
      formValues.name = formValues.name * 100;
    }

    if (populated) {
      const updates = {};
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          if (initialValues[key] !== formValues[key] && key[0] !== '_') {
            updates[key] = formValues[key];
          }
        }
      }
      console.log('updates', updates);
      updateMoodboard(id, updates);
    } else {
      addMoodboard(formValues);
    }
    reset(defaultValues);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className={classes.formrow}>
        <Controller
          render={(
            { onChange, onBlur, value, name, ref },
            { invalid, isTouched, isDirty },
          ) => (
            <TextField
              inputRef={ref}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!errors.name}
              helperText={errors.name?.message}
              id="name"
              name={name}
              placeholder="your name"
              label="name"
            />
          )}
          name="name"
          control={control}
          rules={{ required: true }}
        />
      </div>

      <div className={classes.formrow}>
        <Controller
          render={(
            { onChange, onBlur, value, name, ref },
            { invalid, isTouched, isDirty },
          ) => (
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="movies">Choose a recipe</InputLabel>
              <Select
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.recipes}
                id="movies"
                name={name}
                label="movies"
                required={true}
              >
                <MenuItem value="">Choose a movie</MenuItem>
                {productCategories.map((movies) => (
                  <MenuItem key={movies} value={movies}>
                    {movies}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          name="movies"
          control={control}
          rules={{ required: true }}
        />
        {errors.movies ? (
          <InputLabel htmlFor="movies">{errors.movies.message}</InputLabel>
        ) : (
          ''
        )}
      </div>


      <div className={classes.formrow}>
        <Controller
          render={(
            { onChange, onBlur, value, name, ref },
            { invalid, isTouched, isDirty },
          ) => (
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="recipes">Choose a recipe</InputLabel>
              <Select
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.recipes}
                id="recipes"
                name={name}
                label="recipes"
                required={true}
              >
                <MenuItem value="">Choose a recipe</MenuItem>
                {productCategories.map((recipes) => (
                  <MenuItem key={recipes} value={recipes}>
                    {recipes}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          name="recipes"
          control={control}
          rules={{ required: true }}
        />
        {errors.recipes ? (
          <InputLabel htmlFor="recipes">{errors.recipes.message}</InputLabel>
        ) : (
          ''
        )}
      </div>
      <div className={classes.formrow}>
        <Button onClick={() => reset(defaultValues)}>Reset</Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={!isValid || !isDirty}
        >
          {populated ? 'Update' : 'Add'} Moodboard
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;
