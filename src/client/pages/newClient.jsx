import React from "react";
import NewClient from '../components/forms/newClient';
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

export default function Client() {

  const classes = useStyles();

  return (
    <>
      <CardHeader
        // title={firstName}
        subtitle="Entrez le profil"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
      <NewClient />
      </Paper>
    </>
  );
};