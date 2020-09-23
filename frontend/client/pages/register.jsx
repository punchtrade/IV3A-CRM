import React from "react";
import FormRegister from "../components/forms/formRegister";
import  Paper  from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  registerContainer: {
    minWidth: 320,
    maxWidth: 850,
    height: 650,
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto',
  },
}))

export default function Register() {

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.registerContainer} elevation={6}>
      <FormRegister />
      </Paper>
    </>
  );
};