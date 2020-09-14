import React from "react";
import Invoice from '../components/invoice/invoice';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

function InvoicePage(props) {

  const { history } = props;
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.pageContent} elevation={6}>
        <Invoice />
      </Paper>
      <Button
        variant="contained"
        color="danger"
        fullWidth
        disableFocusRipple
        onClick={() => {
          props.history.push("/dashboard");
        }}
      >
        Tableau de bord
          </Button>
      <br /> <br />
    </>
  );
};

export default withRouter(InvoicePage);