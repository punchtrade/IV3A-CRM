import React from "react";
import DrawerNav from '../components/header/drawer';
import Scheduler from '../components/scheduler/scheduler';
import  Paper  from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dashboardContainer: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
}))

export default function Dashboard() {

  const classes = useStyles();

  return (
    <>
      {/* <Paper className={classes.dashboardContainer} elevation={6}> */}
      <DrawerNav />
      <Scheduler />
      {/* </Paper> */}
    </>
  );
};