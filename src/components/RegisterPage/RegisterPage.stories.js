import React from "react";
import RegisterPage from "./RegisterPage";
import ApiDoc from "./RegisterPage.md";

export default {
  component: RegisterPage,
  title: "RegisterPage",
  parameters: { notes: ApiDoc }
};

export const Default = () => <RegisterPage />;
