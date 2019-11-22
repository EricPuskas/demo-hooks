import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import RegisterPage from "./components/RegisterPage";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    padding: theme.spacing(2)
  },
  title: {
    marginBottom: "1rem"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h3" component="h1">
        Demo - Hooks
      </Typography>
      <RegisterPage />
    </div>
  );
};

export default App;
