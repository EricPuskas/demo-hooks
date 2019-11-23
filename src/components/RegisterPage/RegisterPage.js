import React, { useReducer } from "react";
import PropTypes from "prop-types";

/**
 *  Material UI Imports
 */
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import ProfileCompletion, {
  ProfileCompletionDefaultProps,
  ProfileCompletionPropTypes
} from "../ProfileCompletion";
import PersonalInfo from "../PersonalInfo";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: `0 ${theme.spacing(10)}px`
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.text.secondary
  }
}));

/**
 * Defines the prop types
 */
const propTypes = {
  steps: PropTypes.shape(ProfileCompletionPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  steps: ProfileCompletionDefaultProps
};

/**
 * Reducer setup
 */

const initState = { activeStep: 0 };
const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "STEP_NEXT":
      return { activeStep: state.activeStep + 1 };
    case "STEP_BACK":
      return { activeStep: state.activeStep - 1 };
    case "STEP_RESET":
      return { activeStep: 0 };
    default:
      return state;
  }
};

switch (type) {
  case "STEP_NEXT":
    return { activeStep: activeStep + 1 };
  case "STEP_BACK":
    return { activeStep: activeStep - 1 };
  case "STEP_RESET":
    return { activeStep: 0 };
  default:
    return state;
}

/** Material Ui Styling */
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: `0 ${theme.spacing(10)}px`
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.text.secondary
  }
}));

/** Displays the component */
const RegisterPage = props => {
  const classes = useStyles();
  const { steps } = props;
  const [state, dispatch] = useReducer(reducer, initState);
  const { activeStep } = state;

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xl={3} xs={12}>
          <Paper className={classes.paper}>
            <ProfileCompletion activeStep={activeStep} {...steps} />
          </Paper>
        </Grid>
        <Grid item xl={4} xs={12}>
          <Paper className={classes.paper}>
            <PersonalInfo dispatch={dispatch} state={state} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

RegisterPage.propTypes = propTypes;
RegisterPage.defaultProps = defaultProps;

export default RegisterPage;
export {
  propTypes as RegisterPagePropTypes,
  defaultProps as RegisterPageDefaultProps
};
