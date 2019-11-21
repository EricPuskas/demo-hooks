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
    flexDirection: "column"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    posteCode: ""
  });

  const handleChange = e => {
    e.persist();
    setFormData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    console.log(formData);
  };

  // return <Container className="PersonalInfo">PersonalInfo</Container>;
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
