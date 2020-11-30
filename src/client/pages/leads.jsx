import React, { Component } from "react";
import Leads from '../components/leads/leads';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

class LeadsPage extends Component {
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
        <Leads />
      </>
    );
  };
  }
  LeadsPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { loginUser }
  )(LeadsPage);