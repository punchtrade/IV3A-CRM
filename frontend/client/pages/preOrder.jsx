import React from "react";
import { withRouter } from "react-router-dom";
import PreOrder from '../components/forms/preOrder';
import  Paper  from '@material-ui/core/Paper';
import  CardHeader  from '@material-ui/core/CardHeader';
import  Button  from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

 function PreOrderPage(props) {

  const {history} = props;
  const classes = useStyles();

  return (
    <>
      <CardHeader
        title="Commande ferme de Véhicule"
      />
      <Paper className={classes.pageContent} elevation={6}>
      <PreOrder />
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
          <br/><br/>
    </>
  );
};
export default withRouter(PreOrderPage);