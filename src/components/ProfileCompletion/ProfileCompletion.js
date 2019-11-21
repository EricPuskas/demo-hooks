import React, { useReducer } from "react";
import PropTypes from "prop-types";

/**
 *  Material UI Imports
 */
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

/**
 *  Material Ui Styling
 */
const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

const getSteps = () => [
  "Step 1 - First Name",
  "Step 2 - Last Name",
  "Step 3 - Address",
  "Step 4 - Poste Code"
];

const initState = { activeStep: 0 };

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "STEP_BACK":
      return { activeStep: state.activeStep - payload };
    case "STEP_NEXT":
      return { activeStep: state.activeStep + payload };
    case "RESET_STEP":
      return { activeStep: 0 };
    default:
      return state;
  }
};

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const ProfileCompletion = props => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initState);
  const { activeStep } = state;
  const steps = getSteps();
  const NumSteps = 1;

  const handleNext = () => {
    dispatch({
      type: "STEP_NEXT",
      payload: NumSteps
    });
  };

  const handleBack = () => {
    dispatch({
      type: "STEP_BACK",
      payload: NumSteps
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET_STEP",
      payload: NumSteps
    });
  };

  // return <Container className="ProfileCompletion">ProfileCompletion</Container>;
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

ProfileCompletion.propTypes = propTypes;
ProfileCompletion.defaultProps = defaultProps;

export default ProfileCompletion;
export {
  propTypes as ProfileCompletionPropTypes,
  defaultProps as ProfileCompletionDefaultProps
};
