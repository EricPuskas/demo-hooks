import React from "react";

import Button from "@material-ui/core/Button";
import PersonalInfo from "./components/PersonalInfo";
import ProfileCompletion from "./components/ProfileCompletion";

/**
 *
 * #TODO:  RegisterPage - parent component, useContext to connect the 2
 * - ProfileCompletion
 * - PersonalInfo)
 */
const App = () => {
  return (
    <div>
      <h1>Demo - Hooks</h1>
      <p> Featuring: </p>
      <ul>
        <li>useState</li>
        <li>useEffect </li>
        <li>useReducer</li>
      </ul>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <ProfileCompletion />
      <PersonalInfo />
    </div>
  );
};

export default App;
