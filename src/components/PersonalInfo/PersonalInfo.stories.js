import React from "react";
import PersonalInfo from "./PersonalInfo";
import ApiDoc from "./PersonalInfo.md";

export default {
  component: PersonalInfo,
  title: "PersonalInfo",
  parameters: { notes: ApiDoc }
};

export const Default = () => <PersonalInfo />;
