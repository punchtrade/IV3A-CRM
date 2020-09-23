import React from "react";
import { withRouter } from "react-router-dom";
import NewClient from '../components/forms/newClient';
import  Paper  from '@material-ui/core/Paper';
import  CardHeader  from '@material-ui/core/CardHeader';
import  PeopleOutlineTwoTone  from '@material-ui/icons/PeopleOutlineTwoTone';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

function Client(props) {

  const {history} = props;
    const classes = useStyles();

  return (
    <>
      <CardHeader
        title="Fiche Client"
        subtitle="Entrez le profil"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent} elevation={6}>
      <NewClient />
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
          <br/> <br/>
    </>
  );
};
export default withRouter(Client);