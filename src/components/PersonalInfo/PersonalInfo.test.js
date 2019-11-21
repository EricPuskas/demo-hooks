import React from "react";
import { render } from "@testing-library/react";
import PersonalInfo from "./PersonalInfo";

it("has a PersonalInfo component", () => {
  const { getByText } = render(<PersonalInfo />);
  expect(getByText("PersonalInfo")).toBeInTheDocument();
});
