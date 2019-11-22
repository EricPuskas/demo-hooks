import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 *  Material UI Imports
 */
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  formGroup: {
    display: "flex",
    flexWrap: "wrap"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

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
const PersonalInfo = props => {
  const classes = useStyles();
  const { dispatch, state } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    posteCode: ""
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const syncWithProfileComp = () => {
    const { firstName, lastName, address, posteCode } = formData;
    switch (state.activeStep) {
      case 0:
        firstName.length >= 3 && dispatch({ type: "STEP_NEXT" });
        break;
      case 1:
        firstName.length < 3 && dispatch({ type: "STEP_BACK" });
        lastName.length >= 3 && dispatch({ type: "STEP_NEXT" });
        break;
      case 2:
        lastName.length < 3 && dispatch({ type: "STEP_BACK" });
        address.length >= 3 && dispatch({ type: "STEP_NEXT" });
        break;
      case 3:
        address.length < 3 && dispatch({ type: "STEP_BACK" });
        posteCode.length === 4 && dispatch({ type: "STEP_NEXT" });
        break;
      case 4:
        posteCode.length < 4 && dispatch({ type: "STEP_BACK" });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    syncWithProfileComp();
    // eslint-disable-next-line
  }, [formData]);

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div className={classes.formGroup}>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="First Name"
          name="firstName"
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Last Name"
          name="lastName"
          onChange={handleChange}
          margin="normal"
        />
      </div>
      <div className={classes.formGroup}>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Address"
          name="address"
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Poste Code"
          name="posteCode"
          onChange={handleChange}
          margin="normal"
        />
      </div>
    </form>
  );
};

PersonalInfo.propTypes = propTypes;
PersonalInfo.defaultProps = defaultProps;

export default PersonalInfo;
export {
  propTypes as PersonalInfoPropTypes,
  defaultProps as PersonalInfoDefaultProps
};
