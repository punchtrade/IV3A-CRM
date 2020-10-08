import React from "react";
import Cars from '../components/cars/cars';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

export default function CarsPage() {

  const classes = useStyles();

  return (
    <>
      <Cars />
    </>
  );
};