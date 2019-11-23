import React from "react";

/** Component Imports */
import RegisterPage from "./components/RegisterPage";

/** Material UI Imports */
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

/** Material UI Styling */
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
  const { root, title } = useStyles();

  return (
    <div className={root}>
      <Typography className={title} variant="h3" component="h1">
        Demo - Hooks
      </Typography>
      <RegisterPage />
    </div>
  );
};

export default App;
