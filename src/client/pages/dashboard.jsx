import React, { Component } from "react";
import DrawerNav from '../components/header/drawer';
import Scheduler from '../components/scheduler/scheduler';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

const useStyles = makeStyles(theme => ({
  dashboardContainer: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
}))

class Dashboard extends Component {
  onLoginClick = e => {
    e.preventDefault();
    this.props.loginUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <>
      <h4>
        <b>Allô!,</b>{user.email}
      {/* <b>Allô!,</b> {user.email.split(" ")[0]} */}
      </h4>
        <DrawerNav />
        <Scheduler />
      </>
    );
  }
};

Dashboard.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Dashboard);