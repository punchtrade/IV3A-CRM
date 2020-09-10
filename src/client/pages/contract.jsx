import React from "react";
import Contract from '../components/contract/contract';
import  Paper  from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

export default function ContractPage() {

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.pageContent} elevation={6}>
      <Contract/>
      </Paper>
      <a href="/dashboard"><input type="submit" value='Panel'></input></a>
    </>
  );
};