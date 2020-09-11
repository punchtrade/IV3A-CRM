import React from "react";
import FormCar from '../components/forms/formCar';
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

export default function FormCarPage() {

  const classes = useStyles();

  return (
    <>
      <CardHeader
        title="Commande ferme de Véhicule"
        // subtitle="Entrez le profil"
        // icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent} elevation={6}>
      <FormCar />
      </Paper>
    </>
  );
};