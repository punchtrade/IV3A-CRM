import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NewClient from '../components/forms/newClient';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "/Users/carmenbuendia/DevProjects/IV3A/src/client/actions/authActions.js";


const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

class Client extends React.Component {
  onLoginClick = e => {
    e.preventDefault();
    this.props.loginUser();
  };
  render() {
    const { history } = this.props;
    const { user } = this.props.auth;
    return (
      <>
        <CardHeader
          title="Fiche Client"
          subtitle="Entrez le profil"
          icon={<PeopleOutlineTwoTone fontSize="large" />}
        />
        <h4>
          <b>Allô!,</b>{user.email}
          {/* <b>Allô!,</b> {user.email.split(" ")[0]} */}
        </h4>
        <Paper className={useStyles.pageContent} elevation={6}>
          <NewClient />
        </Paper>
        <br /><br />
        <Button
          variant="contained"
          color="danger"
          fullWidth
          disableFocusRipple
          onClick={() => {
            this.props.history.push("/dashboard");
          }}
        >
          Tableau de bord
          </Button>
        <br /> <br />
      </>
    );
  };
}

Client.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Client);