import React from "react";
import FormRegister from "../components/forms/formRegister";

import  Paper  from '@material-ui/core/Paper';
import  CardHeader  from '@material-ui/core/CardHeader';
import  PeopleOutlineTwoTone  from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

export default function Register() {

  const classes = useStyles();

  return (
    <>
      <CardHeader
        title="S'inscrire"
        subtitle="Entrez le profil"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
      <FormRegister />
      </Paper>
    </>
  );
};