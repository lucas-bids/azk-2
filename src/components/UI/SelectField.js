import { forwardRef } from "react";
import { filterFieldClass, formBarInputClass } from "./uiClasses";

const SelectField = forwardRef(
  ({ variant = "default", className = "", children, ...props }, ref) => {
    const variantClass =
      variant === "bar"
        ? `${formBarInputClass} appearance-none`
        : variant === "filter"
          ? `${filterFieldClass} appearance-none`
          : "appearance-none";

    return (
      <select ref={ref} className={`${variantClass} ${className}`.trim()} {...props}>
        {children}
      </select>
    );
  }
);

SelectField.displayName = "SelectField";

export default SelectField;
