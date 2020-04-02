import React from "react";
import "./button.css";

//! TYPES and SIZES is required, other props are optional

//!REQUIRED
const TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
  SUCCESS: "success"
};

//!REQUIRED
export const SIZES = {
  XS: "xsmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};

const BaseButton = ({
  onClick,
  type,
  disabled,
  buttonType,
  buttonSize,
  title,
  styles,
  children,
  testid
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    title={title}
    style={styles}
    data-testid={testid}
    // quick ternary to remove style for default disabled style
    className={`${buttonType} ${buttonSize} btnStyle`}
  >
    {children}
  </button>
);

export const Primary = props => (
  <BaseButton {...props} buttonType={TYPES.PRIMARY} />
);
export const Secondary = props => (
  <BaseButton {...props} buttonType={TYPES.SECONDARY} />
);
