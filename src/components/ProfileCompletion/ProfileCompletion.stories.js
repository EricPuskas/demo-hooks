import React from "react";
import ProfileCompletion from "./ProfileCompletion";
import ApiDoc from "./ProfileCompletion.md";

export default {
  component: ProfileCompletion,
  title: "ProfileCompletion",
  parameters: { notes: ApiDoc }
};

export const Default = () => <ProfileCompletion />;
