import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Contract from '../components/contract/contract';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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

// const classes = useStyles();

class ContractPage extends Component {
 render() {
  const { history } = this.props;
  const { user } = this.props.auth;
    return (
      <>
       <h4>
        <b>Allô!,</b>{user.email}
      {/* <b>Allô!,</b> {user.email.split(" ")[0]} */}
      </h4>
        <Paper className={useStyles.pageContent} elevation={6}>
          <Contract />
        </Paper>
        <Button
          variant="contained"
          position="left"
          color="danger"
          fullWidth
          disableFocusRipple
          onClick={() => {
            this.props.history.push("/dashboard")
          }}
        >
          Tableau de bord
        </Button>
        <br /> <br />    </>
    );
  }
};

ContractPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(
  mapStateToProps,
  {loginUser}
)(withRouter(ContractPage));