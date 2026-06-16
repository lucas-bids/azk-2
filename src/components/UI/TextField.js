import { forwardRef } from "react";
import { filterFieldClass, formBarInputClass, searchInputClass } from "./uiClasses";

const TextField = forwardRef(
  ({ variant = "default", className = "", type = "text", ...props }, ref) => {
    const variantClass =
      variant === "search"
        ? searchInputClass
        : variant === "bar"
          ? formBarInputClass
          : variant === "filter"
            ? filterFieldClass
            : "";

    return (
      <input
        ref={ref}
        type={type}
        className={`${variantClass} ${className}`.trim()}
        {...props}
      />
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
