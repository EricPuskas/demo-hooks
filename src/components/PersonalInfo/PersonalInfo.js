import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/** Material UI Imports */
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

/** Generate styles  */
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

/** Defines the prop types */
const propTypes = {
  state: PropTypes.shape({
    activeStep: PropTypes.number
  }),
  dispatch: PropTypes.func,
  defaults: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    posteCode: PropTypes.string
  })
};

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
};

/** Displays the component */
const PersonalInfo = props => {
  const { dispatch, state, defaults } = props;
  const { activeStep } = state;
  const [formData, setFormData] = useState(defaults);
  const { container, formGroup, textField } = useStyles();

  /** Syncronyze the Profile Component state */
  const syncWithProfileComp = () => {
    const { firstName, lastName, address, posteCode } = formData;
    const STEP_NEXT = { type: "STEP_NEXT" };
    const STEP_BACK = { type: "STEP_BACK" };

    switch (activeStep) {
      case 0:
        firstName.length >= 3 && dispatch(STEP_NEXT);
        break;
      case 1:
        firstName.length < 3 && dispatch(STEP_BACK);
        lastName.length >= 3 && dispatch(STEP_NEXT);
        break;
      case 2:
        lastName.length < 3 && dispatch(STEP_BACK);
        address.length >= 3 && dispatch(STEP_NEXT);
        break;
      case 3:
        address.length < 3 && dispatch(STEP_BACK);
        posteCode.length === 4 && dispatch(STEP_NEXT);
        break;
      case 4:
        posteCode.length < 4 && dispatch(STEP_BACK);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    syncWithProfileComp();
    // eslint-disable-next-line
  }, [formData]);

  /** Handle input change, set the state */
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
    <form className={container} noValidate autoComplete="off">
      <div className={formGroup}>
        <TextField
          id="standard-basic"
          className={textField}
          label="First Name"
          name="firstName"
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          id="standard-basic"
          className={textField}
          label="Last Name"
          name="lastName"
          onChange={handleChange}
          margin="normal"
        />
      </div>
      <div className={formGroup}>
        <TextField
          id="standard-basic"
          className={textField}
          label="Address"
          name="address"
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          id="standard-basic"
          className={textField}
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
