import React from "react";
import { withRouter } from "react-router-dom";
import FormCar from '../components/forms/formCar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

function FormCarPage(props) {

  const { history } = props;
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
export default withRouter(FormCarPage);