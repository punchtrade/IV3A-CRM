import React from "react";
import { withRouter } from 'react-router-dom';
import Crm4 from '../../components/crm/crm-4';
import  Paper  from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

 function Crm4Page(props) {

  const {history} = props;
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.pageContent} elevation={6}>
      <Crm4 />
      </Paper>
      <Button       
       variant="contained"
        position="left"
        color="danger"
        fullWidth
        disableFocusRipple
        onClick={() => {
          props.history.push("/crm-5")
        }}>
          Suivant
      </Button>
      <br></br>
      <br></br>
      <Button
        variant="contained"
        position="left"
        color="danger"
        fullWidth
        disableFocusRipple
        onClick={() => {
          props.history.push("/dashboard")
        }}
      >
        Tableau de bord
        </Button>
        <br/> <br/>
    </>
  );
};
export default withRouter(Crm4Page);