import React, {Component} from "react";
import Search from '../components/search/search';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
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

class SearchPage extends Component {
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
      <Search />
    </>
  );
  }
};
SearchPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(SearchPage);