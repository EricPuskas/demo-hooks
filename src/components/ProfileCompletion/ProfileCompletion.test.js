import React from "react";
import { render } from "@testing-library/react";
import ProfileCompletion from "./ProfileCompletion";

it("has a ProfileCompletion component", () => {
  const { getByText } = render(<ProfileCompletion />);
  expect(getByText("ProfileCompletion")).toBeInTheDocument();
});
