import React from "react";
import PropTypes from "prop-types";

import ProfileCompletion from "../ProfileCompletion";
import PersonalInfo from "../PersonalInfo";

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
const RegisterPage = props => {
  return (
    <div className="RegisterPage">
      <ProfileCompletion />
      <PersonalInfo />
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
