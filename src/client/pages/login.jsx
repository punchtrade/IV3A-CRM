import React from "react";
import FormLogin from "../components/forms/formLogin";
import  Paper  from '@material-ui/core/Paper';
import  CardHeader  from '@material-ui/core/CardHeader';
import  PeopleOutlineTwoTone  from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  paper: {
    padding: 20,
    overflow: 'auto',
  },
  loginContainer: {
    minWidth: 320,
    maxWidth: 850,
    height: 400,
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto',
  },
}))

export default function Login() {

  const classes = useStyles();

  return (
    <>
      {/* <CardHeader
        title="S'identifier"
        subtitle="Entrez le profil"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      /> */}
      <Paper className={classes.loginContainer} elevation={6}>
        <FormLogin />
      </Paper>
    </>
  );
};


