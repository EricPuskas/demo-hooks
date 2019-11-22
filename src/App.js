import React from "react";

import RegisterPage from "./components/RegisterPage";
import Typography from "@material-ui/core/Typography";

/**
 *
 * #TODO:  RegisterPage - parent component, useContext to connect the 2
 * - ProfileCompletion
 * - PersonalInfo)
 */
const App = () => {
  return (
    <div>
      <Typography variant="h3" component="h1">
        Demo - Hooks
      </Typography>
      <RegisterPage />
    </div>
  );
};

export default App;
