import React from "react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
};

export const Primary = () => <Button variant="btn btn-primary"/>;

export const Danger = () => <Button variant="btn btn-danger"/>;

export const Alert = () => <Button variant="btn btn-alert"/>;

export const Info = () => <Button variant="btn btn-info"/>;
