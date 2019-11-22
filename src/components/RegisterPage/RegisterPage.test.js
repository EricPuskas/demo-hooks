import React from "react";
import { render } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

it("has a RegisterPage component", () => {
  const { getByText } = render(<RegisterPage />);
  expect(getByText("RegisterPage")).toBeInTheDocument();
});
