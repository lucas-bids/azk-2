import { primaryButtonClass, secondaryButtonClass } from "./uiClasses";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const variantClass =
    variant === "secondary" ? secondaryButtonClass : primaryButtonClass;

  return (
    <button className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
