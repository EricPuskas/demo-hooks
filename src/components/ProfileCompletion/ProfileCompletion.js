import React from "react";
import PropTypes from "prop-types";

/**
 *  Material UI Imports
 */
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
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

/**
 * Defines the prop types
 */
const propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string)
};

/**
 * Defines the default props
 */
const defaultProps = {
  steps: [
    "Step 1 - First Name",
    "Step 2 - Last Name",
    "Step 3 - Address",
    "Step 4 - Poste Code"
  ]
};

/**
 * Displays the component
 */
const ProfileCompletion = props => {
  const classes = useStyles();
  const { activeStep, steps } = props;

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
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
