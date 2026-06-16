import { formBarClass, formBarSegmentClass } from "./uiClasses";

const FormBar = ({ children, className = "" }) => {
  return <div className={`${formBarClass} ${className}`.trim()}>{children}</div>;
};

export const FormBarSegment = ({
  children,
  widthClass = "",
  className = "",
  bordered = true,
}) => {
  const borderClass = bordered ? formBarSegmentClass : "flex items-center";

  return (
    <div className={`${borderClass} ${widthClass} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default FormBar;
