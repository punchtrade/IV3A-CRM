import React from "react";
import Search from '../components/search/search';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";



const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

export default function SearchPage() {

  const classes = useStyles();

  return (
    <>
      <Search />
    </>
  );
};